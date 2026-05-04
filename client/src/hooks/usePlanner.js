// ============================================================
//  HOOK: usePlanner.js
//  Manages state and calls plannerController for the
//  Custom Planner page.
// ============================================================

import { useState, useCallback } from 'react'
import { calculateEstimate } from '../controllers/plannerController'
import { SERVICE_COSTS } from '../models/pricing.model'

const INITIAL_FORM = {
  eventType:    'wedding',
  guestCount:   100,
  locationTier: 'tier2',
  budgetLevel:  'medium',
  addons:       [],
  name:         '',
  phone:        '',
  email:        '',
  eventDate:    '',
}

export function usePlanner() {
  const [form, setForm]           = useState(INITIAL_FORM)
  const [step, setStep]           = useState(1)   // 1-3 multi-step
  const [result, setResult]       = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const updateField = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }, [])

  const toggleAddon = useCallback((addonKey) => {
    setForm((prev) => {
      const exists = prev.addons.includes(addonKey)
      return {
        ...prev,
        addons: exists
          ? prev.addons.filter((a) => a !== addonKey)
          : [...prev.addons, addonKey],
      }
    })
  }, [])

  const estimate = useCallback(() => {
    const res = calculateEstimate(form, SERVICE_COSTS)
    setResult(res)
    setStep(3)
  }, [form])

  const reset = useCallback(() => {
    setForm(INITIAL_FORM)
    setStep(1)
    setResult(null)
    setSubmitted(false)
  }, [])

  const handleSubmitEnquiry = useCallback((e) => {
    e.preventDefault()
    // Future: POST to /api/enquiries
    setSubmitted(true)
  }, [])

  return {
    form,
    step,
    result,
    submitted,
    updateField,
    toggleAddon,
    estimate,
    reset,
    setStep,
    handleSubmitEnquiry,
  }
}
