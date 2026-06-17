'use client';

import { useEffect } from 'react';

/**
 * Forces the page to start at the top on initial load and refresh.
 * - Disables browser scroll restoration (prevents restoring previous scroll position)
 * - Clears any URL hash that could trigger anchor scrolling
 * - Scrolls to (0, 0) immediately on mount
 */
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
  window.history.replaceState(null, '', window.location.pathname);
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

export function ScrollReset() {
  useEffect(() => {
    window.history.replaceState(null, '', window.location.pathname);
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 0);
  }, []);

  return null;
}
