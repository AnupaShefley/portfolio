/**
 * Base path for GitHub Pages (e.g. /portfolio). Empty when running locally.
 * Next.js does not auto-prefix next/image src with basePath, so we use this.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** Returns the full path for a static asset (e.g. image in public folder). */
export function asset(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalized}`
}
