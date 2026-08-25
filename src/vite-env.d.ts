/// <reference types="vite/client" />

/**
 * Build-time version stamp, injected via Vite's `define` in vite.config.ts
 * (git short hash + date, or the package.json version as a fallback).
 * Shown in a small footer so a family member can screenshot which build
 * is installed on their phone.
 */
declare const __APP_VERSION__: string
