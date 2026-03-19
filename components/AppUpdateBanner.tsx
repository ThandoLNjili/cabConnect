import React from 'react';
import { RefreshCw, X } from 'lucide-react';

import { BuildMetadata } from '../utils/appVersion';

interface AppUpdateBannerProps {
  latestBuild: BuildMetadata;
  onApply: () => void;
  onDismiss: () => void;
}

function formatBuildTime(builtAt: string) {
  const parsed = new Date(builtAt);
  if (Number.isNaN(parsed.getTime())) {
    return builtAt;
  }
  return parsed.toLocaleString();
}

const AppUpdateBanner: React.FC<AppUpdateBannerProps> = ({ latestBuild, onApply, onDismiss }) => {
  return (
    <div className="fixed inset-x-0 top-3 z-50 px-3 sm:px-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-emerald-200 bg-white/95 shadow-xl backdrop-blur">
        <div className="flex items-start gap-3 p-4 sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-emerald-800">New CabConnect update ready</p>
            <p className="mt-1 text-sm text-gray-600">
              Build from {formatBuildTime(latestBuild.builtAt)} is available. The app will refresh automatically in a few seconds unless you tap Later.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onApply}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh now
            </button>
            <button
              type="button"
              onClick={onDismiss}
              className="inline-flex items-center gap-1 rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
            >
              <X className="h-4 w-4" />
              Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppUpdateBanner;