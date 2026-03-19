export interface BuildMetadata {
  version: string;
  buildId: string;
  builtAt: string;
}

export const currentBuild: BuildMetadata = {
  version: __APP_VERSION__,
  buildId: __APP_BUILD_ID__,
  builtAt: __APP_BUILD_TIME__,
};

const VERSION_FILE_URL = `${import.meta.env.BASE_URL}version.json`;

function isBuildMetadata(value: unknown): value is BuildMetadata {
  if (!value || typeof value !== 'object') return false;

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.version === 'string'
    && typeof candidate.buildId === 'string'
    && typeof candidate.builtAt === 'string'
  );
}

export async function fetchLatestBuildMetadata(signal?: AbortSignal): Promise<BuildMetadata | null> {
  try {
    const response = await fetch(`${VERSION_FILE_URL}?t=${Date.now()}`, {
      cache: 'no-store',
      signal,
    });

    if (!response.ok) {
      return null;
    }

    const json = await response.json();
    return isBuildMetadata(json) ? json : null;
  } catch {
    return null;
  }
}

export async function clearAppCaches() {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return;
  }

  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter((name) => name.toLowerCase().includes('cabconnect'))
      .map((name) => caches.delete(name))
  );
}

export async function updateServiceWorkers() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.all(
    registrations.map(async (registration) => {
      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
      await registration.update();
    })
  );
}