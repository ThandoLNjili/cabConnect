import { mkdir, writeFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf-8')
) as { version?: string };

const appVersion = packageJson.version ?? '0.0.0';
const buildTime = new Date().toISOString();
const buildId = `${appVersion}-${buildTime}`;

function writeVersionManifest() {
  let outDir = '';

  return {
    name: 'cabconnect-version-manifest',
    configResolved(config: { root: string; build: { outDir: string } }) {
      outDir = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const versionManifest = {
        version: appVersion,
        buildId,
        builtAt: buildTime,
      };

      await mkdir(outDir, { recursive: true });
      await writeFile(
        resolve(outDir, 'version.json'),
        JSON.stringify(versionManifest, null, 2)
      );
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cabConnect/',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
    __APP_BUILD_ID__: JSON.stringify(buildId),
    __APP_BUILD_TIME__: JSON.stringify(buildTime),
  },
  plugins: [
    react(),
    writeVersionManifest(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false,
      workbox: {
        navigateFallback: 'index.html',
        navigateFallbackAllowlist: [/^\/cabConnect/],
        swDest: 'dist/sw.js',
      },
      manifest: {
        name: 'CabConnect',
        short_name: 'CabConnect',
        description: 'Instant ride booking',
        theme_color: '#059669',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
          icons: []
      }
    })
  ]
});
