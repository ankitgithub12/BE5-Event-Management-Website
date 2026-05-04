// ============================================================
//  UTILS: helpers.js
//  Shared utility functions.
// ============================================================

/**
 * Conditionally join class names (like clsx, but zero-dependency).
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format a number in Indian currency format.
 */
export function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Scroll to a section by id.
 */
export function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * Truncate a string.
 */
export function truncate(str, max = 80) {
  return str.length > max ? str.slice(0, max) + '…' : str
}
