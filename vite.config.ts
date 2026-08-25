import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf-8'))

// A short, human-visible build stamp so a family member can screenshot
// their installed app and everyone can tell which build is on which
// phone. Falls back to the package version if git isn't available
// (e.g. a source tarball with no .git directory).
function buildStamp() {
  try {
    const hash = execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim()
    const date = new Date().toISOString().slice(0, 10)
    return `${date}-${hash}`
  } catch {
    return pkg.version
  }
}

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(buildStamp()),
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      // We register the service worker ourselves from src/main.tsx (simplest
      // standard pattern, no update-prompt UX) rather than using the
      // plugin's virtual registration module.
      injectRegister: false,
      manifest: {
        name: 'מידע למטייל',
        short_name: 'מידע למטייל',
        description: 'מדריך טיולים היברידי לוייטנאם ותאילנד — עובד גם בלי אינטרנט',
        lang: 'he',
        dir: 'rtl',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#faf9f4',
        theme_color: '#47664b',
        icons: [
          { src: 'icons/pwa-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          {
            src: 'icons/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Precache literally everything the build produces — every route
        // must work with zero network. No runtimeCaching entries: a cache
        // miss must never fall through to a network request that can fail
        // in the field.
        globPatterns: ['**/*.{js,css,html,woff2,png,svg,webp,ico,json,webmanifest}'],
        navigateFallback: '/index.html',
      },
    }),
  ],
})
