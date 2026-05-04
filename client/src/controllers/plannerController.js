// ============================================================
//  CONTROLLER: plannerController.js
//  Business logic for the Custom Planner cost estimator.
//  Pure functions — no React dependencies.
// ============================================================

import {
  BASE_COST_PER_GUEST,
  GUEST_BRACKETS,
  LOCATION_MULTIPLIER,
  PACKAGE_THRESHOLDS,
} from '../models/pricing.model'

/**
 * Get the guest-count discount multiplier.
 */
function getGuestMultiplier(guestCount) {
  const bracket = GUEST_BRACKETS.find((b) => guestCount <= b.max)
  return bracket ? bracket.multiplier : 0.8
}

/**
 * Calculate estimated event cost based on user inputs.
 * @param {Object} inputs
 * @param {string} inputs.eventType
 * @param {number} inputs.guestCount
 * @param {string} inputs.locationTier  - 'tier1' | 'tier2' | 'tier3' | 'destination'
 * @param {string} inputs.budgetLevel   - 'basic' | 'medium' | 'premium' | 'luxury'
 * @param {string[]} inputs.addons      - array of SERVICE_COSTS keys
 * @param {Object}  serviceCosts        - imported SERVICE_COSTS object
 * @returns {{ total: number, breakdown: Object, suggestedPackage: string }}
 */
export function calculateEstimate(inputs, serviceCosts) {
  const { eventType, guestCount, locationTier, addons = [] } = inputs

  const baseCPG   = BASE_COST_PER_GUEST[eventType] ?? 1500
  const guestMult = getGuestMultiplier(guestCount)
  const locMult   = LOCATION_MULTIPLIER[locationTier] ?? 1.0

  const cateringCost = baseCPG * guestCount * guestMult
  const addonTotal   = addons.reduce((sum, key) => sum + (serviceCosts[key] ?? 0), 0)

  const subtotal = (cateringCost + addonTotal) * locMult
  const gst      = subtotal * 0.18
  const total    = Math.round(subtotal + gst)

  const breakdown = {
    catering:    Math.round(cateringCost * locMult),
    addons:      Math.round(addonTotal * locMult),
    gst:         Math.round(gst),
    total,
  }

  // Suggest a package tier
  let suggestedPackage = 'luxury'
  for (const [pkg, threshold] of Object.entries(PACKAGE_THRESHOLDS)) {
    if (total <= threshold) {
      suggestedPackage = pkg
      break
    }
  }

  return { total, breakdown, suggestedPackage }
}

/**
 * Format a number as Indian currency string.
 */
export function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Convert raw INR number to lakh/crore label.
 */
export function toLakhLabel(amount) {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`
  if (amount >= 100000)   return `₹${(amount / 100000).toFixed(1)} L`
  return `₹${(amount / 1000).toFixed(0)}K`
}
