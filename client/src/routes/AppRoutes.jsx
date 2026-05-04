// ============================================================
//  ROUTES: AppRoutes.jsx
//  Central routing configuration — easy to extend.
// ============================================================

import { Routes, Route } from 'react-router-dom'
import HomePage     from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import PackagesPage from '../pages/PackagesPage'
import PlannerPage  from '../pages/PlannerPage'
import ContactPage  from '../pages/ContactPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"          element={<HomePage />}     />
      <Route path="/services"  element={<ServicesPage />} />
      <Route path="/packages"  element={<PackagesPage />} />
      <Route path="/planner"   element={<PlannerPage />}  />
      <Route path="/contact"   element={<ContactPage />}  />
      {/* 404 fallback */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
