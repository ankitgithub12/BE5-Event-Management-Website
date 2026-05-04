// ============================================================
//  CONTEXT: AppContext.jsx
//  Global app state — theme, active enquiry, notifications.
// ============================================================

import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3500)
  }

  return (
    <AppContext.Provider value={{ enquiryOpen, setEnquiryOpen, toast, showToast }}>
      {children}
      {/* Global Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-6 py-3 rounded-xl text-white text-sm font-medium shadow-2xl
            ${toast.type === 'success' ? 'bg-violet-600' : 'bg-red-600'}`}
          style={{ animation: 'fadeInUp 0.3s ease' }}
        >
          {toast.message}
        </div>
      )}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
