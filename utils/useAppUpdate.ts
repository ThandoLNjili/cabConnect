import { useEffect, useRef, useState } from 'react';

import {
  BuildMetadata,
  clearAppCaches,
  currentBuild,
  fetchLatestBuildMetadata,
  updateServiceWorkers,
} from './appVersion';

const VERSION_CHECK_INTERVAL_MS = 60_000;
const AUTO_REFRESH_DELAY_MS = 10_000;
const SESSION_UPDATE_KEY = 'cabconnect_auto_update_target';
const SESSION_DISMISS_KEY = 'cabconnect_dismissed_update_target';

interface AppUpdateState {
  currentBuild: BuildMetadata;
  latestBuild: BuildMetadata | null;
  updateAvailable: boolean;
  applyUpdate: () => Promise<void>;
  dismissUpdate: () => void;
}

export function useAppUpdate(): AppUpdateState {
  const [latestBuild, setLatestBuild] = useState<BuildMetadata | null>(null);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const latestBuildRef = useRef<BuildMetadata | null>(null);
  const applyInProgressRef = useRef(false);

  async function applyUpdate() {
    if (applyInProgressRef.current) {
      return;
    }

    applyInProgressRef.current = true;
    const targetBuildId = latestBuildRef.current?.buildId;

    if (targetBuildId) {
      sessionStorage.setItem(SESSION_UPDATE_KEY, targetBuildId);
    }

    try {
      await updateServiceWorkers();
      await clearAppCaches();
    } finally {
      window.location.reload();
    }
  }

  function dismissUpdate() {
    const targetBuildId = latestBuildRef.current?.buildId;
    if (targetBuildId) {
      sessionStorage.setItem(SESSION_DISMISS_KEY, targetBuildId);
    }

    setUpdateAvailable(false);
  }

  useEffect(() => {
    let cancelled = false;

    const syncLatestBuild = async () => {
      const latest = await fetchLatestBuildMetadata();
      if (cancelled || !latest) {
        return;
      }

      if (latest.buildId === currentBuild.buildId) {
        setLatestBuild(null);
        latestBuildRef.current = null;
        setUpdateAvailable(false);
        return;
      }

      if (sessionStorage.getItem(SESSION_DISMISS_KEY) === latest.buildId) {
        latestBuildRef.current = latest;
        setLatestBuild(latest);
        setUpdateAvailable(false);
        return;
      }

      latestBuildRef.current = latest;
      setLatestBuild(latest);
      setUpdateAvailable(true);
    };

    const runCheck = async () => {
      await updateServiceWorkers();
      await syncLatestBuild();
    };

    void runCheck();

    const intervalId = window.setInterval(() => {
      void syncLatestBuild();
    }, VERSION_CHECK_INTERVAL_MS);

    const handleWindowFocus = () => {
      void runCheck();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        void runCheck();
      }
    };

    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!updateAvailable || !latestBuild) {
      return;
    }

    if (sessionStorage.getItem(SESSION_UPDATE_KEY) === latestBuild.buildId) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      void applyUpdate();
    }, AUTO_REFRESH_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [latestBuild, updateAvailable]);

  return {
    currentBuild,
    latestBuild,
    updateAvailable,
    applyUpdate,
    dismissUpdate,
  };
}