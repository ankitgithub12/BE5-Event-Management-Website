// ============================================================
//  COMPONENT: PackageCard.jsx
// ============================================================

import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'

export default function PackageCard({ pkg, highlighted = false }) {
  const { name, tagline, displayPrice, icon, includes, excludes, gradient, popular } = pkg

  return (
    <div
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
        popular ? 'ring-1 ring-violet-200 shadow-xl scale-105' : 'glass-card'
      }`}
      style={popular ? { background: 'linear-gradient(160deg,#FFFFFF,#F5F3FF)', border: '1px solid rgba(124,58,237,0.1)' } : {}}
    >
      {popular && (
        <div className="absolute top-0 inset-x-0 h-1" style={{ background: gradient }} />
      )}
      {popular && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ background: gradient }}>
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="p-7 pb-5">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{tagline}</p>
        <div>
          <span className="text-3xl font-bold text-gray-900 font-heading">{displayPrice}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-7 h-px" style={{ background: 'rgba(0,0,0,0.07)' }} />

      {/* Includes */}
      <div className="p-7 pt-5 flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-4">Includes</p>
        <ul className="space-y-2.5 mb-5">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
              <Check size={15} className="text-emerald-500 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {excludes.length > 0 && (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Not Included</p>
            <ul className="space-y-2">
              {excludes.slice(0, 3).map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                  <X size={14} className="text-red-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* CTA */}
      <div className="p-7 pt-0">
        <Link
          to="/planner"
          className="block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
          style={popular
            ? { background: gradient, color: '#fff' }
            : { background: 'rgba(124,58,237,0.1)', color: '#7C3AED', border: '1px solid rgba(124,58,237,0.2)' }
          }
        >
          Get This Package
        </Link>
      </div>
    </div>
  )
}
