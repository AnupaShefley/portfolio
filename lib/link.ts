/**
 * Base path for GitHub Pages (e.g. /portfolio). Empty when running locally.
 * Used for generating basePath-aware links.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * Returns a basePath-aware URL for hash links.
 * For example, if basePath is '/portfolio', '/#about' becomes '/portfolio/#about'
 */
export function hashLink(hash: string): string {
  const normalizedHash = hash.startsWith('#') ? hash : `#${hash}`
  const normalizedPath = hash.startsWith('/#') ? hash : `/${normalizedHash}`
  return `${basePath}${normalizedPath}`
}

/**
 * Returns a basePath-aware URL for regular paths.
 * For example, if basePath is '/portfolio', '/works/xyz' becomes '/portfolio/works/xyz'
 */
export function pathLink(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalized}`
}
