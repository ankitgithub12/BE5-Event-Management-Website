// ============================================================
//  COMPONENT: QuoteSummary.jsx
//  Shows calculated cost and package recommendation.
// ============================================================

import { Link } from 'react-router-dom'
import { CheckCircle, RefreshCw } from 'lucide-react'
import { PACKAGES } from '../../data/constants'

function formatINR(n) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)
}

export default function QuoteSummary({ result, form, onReset }) {
  if (!result) return null

  const { total, breakdown, suggestedPackage } = result
  const pkg = PACKAGES.find((p) => p.id === suggestedPackage)

  return (
    <div className="space-y-8">
      {/* Total banner */}
      <div className="relative overflow-hidden rounded-2xl p-8 text-center"
        style={{ background: 'linear-gradient(135deg,#FDFBF7,#F3E8FF)', border: '1px solid rgba(124,58,237,0.2)' }}>
        <p className="text-sm font-semibold text-violet-700 uppercase tracking-widest mb-2">Estimated Cost</p>
        <p className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-2">{formatINR(total)}</p>
        <p className="text-violet-600 text-sm">Including 18% GST</p>
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
      </div>

      {/* Breakdown */}
      <div className="glass-card p-6 rounded-2xl">
        <p className="text-sm font-semibold text-gray-900 mb-4">Cost Breakdown</p>
        <div className="space-y-3">
          {[
            { label: 'Catering & Base Cost', value: breakdown.catering },
            { label: 'Selected Services',    value: breakdown.addons },
            { label: 'GST (18%)',            value: breakdown.gst },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-sm text-gray-600">{label}</span>
              <span className="text-sm font-semibold text-gray-900">{formatINR(value)}</span>
            </div>
          ))}
          <div className="flex items-center justify-between pt-2">
            <span className="text-base font-bold text-gray-900">Total</span>
            <span className="text-base font-bold text-gradient-gold">{formatINR(total)}</span>
          </div>
        </div>
      </div>

      {/* Suggested package */}
      {pkg && (
        <div className="glass-card p-6 rounded-2xl" style={{ border: `1px solid ${pkg.color}33` }}>
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Suggested Package</p>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{pkg.icon}</span>
            <div>
              <p className="font-heading text-xl font-bold text-gray-900">{pkg.name} Package</p>
              <p className="text-sm text-gray-600">{pkg.tagline}</p>
              <p className="text-sm font-semibold mt-1" style={{ color: pkg.color }}>{pkg.displayPrice}</p>
            </div>
          </div>
          <Link to="/packages" className="mt-4 block text-center py-3 rounded-xl text-sm font-semibold text-white transition-all"
            style={{ background: pkg.gradient }}>
            View Package Details
          </Link>
        </div>
      )}

      {/* Event summary */}
      <div className="glass-card p-6 rounded-2xl">
        <p className="text-sm font-semibold text-gray-900 mb-4">Your Event Summary</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
            <p className="text-gray-500 text-xs mb-1">Event Type</p>
            <p className="text-gray-900 font-medium capitalize">{form.eventType}</p>
          </div>
          <div className="p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
            <p className="text-gray-500 text-xs mb-1">Guests</p>
            <p className="text-gray-900 font-medium">{form.guestCount}</p>
          </div>
          <div className="p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
            <p className="text-gray-500 text-xs mb-1">Location</p>
            <p className="text-gray-900 font-medium capitalize">{form.locationTier.replace('tier', 'Tier ')}</p>
          </div>
          <div className="p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
            <p className="text-gray-500 text-xs mb-1">Services</p>
            <p className="text-gray-900 font-medium">{form.addons.length} selected</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onReset}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold glass-card text-gray-600 hover:text-gray-900 transition-all border border-gray-200"
        >
          <RefreshCw size={15} /> Recalculate
        </button>
        <Link
          to="/contact"
          className="flex-1 text-center py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          style={{ background: 'linear-gradient(135deg,#D4AF37,#F0D060)', color: '#0A0A18' }}
        >
          Book Consultation
        </Link>
      </div>
    </div>
  )
}
