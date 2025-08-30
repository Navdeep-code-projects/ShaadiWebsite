/**
 * Simplified image utility functions for Firebase-compatible static deployment
 */

/**
 * Generate a simple blur placeholder for images
 */
export function generateBlurPlaceholder(): string {
  // Simple SVG-based blur placeholder - Firebase compatible
  return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='100%25' height='100%25' fill='%23f8f0e3'/%3E%3C/svg%3E`;
}

/**
 * Determine if an image should be loaded with priority
 */
export function shouldLoadWithPriority(index: number, isHero: boolean): boolean {
  if (isHero) return true;
  return index < 3;
}

/**
 * Get responsive sizes attribute for different image layouts
 */
export function getResponsiveSizes(layout: string): string {
  switch (layout) {
    case 'hero':
      return '100vw';
    case 'thumbnail':
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
    case 'gallery':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw';
    default:
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  }
}