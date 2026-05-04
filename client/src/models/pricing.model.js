// ============================================================
//  MODEL: pricing.model.js
//  Base pricing rules for the Custom Planner cost estimator.
//  All values in INR (₹).
// ============================================================

// Base cost per guest (varies by event type)
export const BASE_COST_PER_GUEST = {
  wedding:     2500,
  engagement:  1800,
  corporate:   2000,
  birthday:    1200,
  anniversary: 1500,
  small:       1000,
}

// Service addon costs
export const SERVICE_COSTS = {
  venue_basic:        100000,
  venue_premium:      300000,
  venue_luxury:       700000,

  photography_basic:   50000,
  photography_pro:    120000,
  photography_full:   200000,

  videography_basic:   40000,
  videography_pro:     90000,
  videography_cinema: 180000,

  prewedding_basic:    50000,
  prewedding_medium:  120000,
  prewedding_high:    300000,

  makeup_basic:        20000,
  makeup_pro:          50000,
  makeup_full:        100000,

  dj:                  40000,
  live_band:          120000,
  fireworks:           80000,

  drone:               30000,

  transport_basic:     50000,
  transport_full:     150000,

  accommodation_budget: 80000,
  accommodation_luxury: 300000,

  invitations_digital:  5000,
  invitations_print:   25000,

  decor_basic:         80000,
  decor_themed:       200000,
  decor_luxury:       500000,
}

// Location multiplier (city tier)
export const LOCATION_MULTIPLIER = {
  tier1: 1.3,   // Metro cities (Mumbai, Delhi, Bengaluru)
  tier2: 1.1,   // Tier-2 cities (Jaipur, Pune, etc.)
  tier3: 1.0,   // Others / local
  destination: 1.8,
}

// Guest count brackets (affects catering & logistics)
export const GUEST_BRACKETS = [
  { max: 50,   multiplier: 1.0 },
  { max: 100,  multiplier: 0.95 },
  { max: 200,  multiplier: 0.9 },
  { max: 400,  multiplier: 0.85 },
  { max: Infinity, multiplier: 0.8 },
]

// Suggested package thresholds
export const PACKAGE_THRESHOLDS = {
  basic:   600000,
  medium:  1500000,
  premium: 3000000,
  luxury:  Infinity,
}
