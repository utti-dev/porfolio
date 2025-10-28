import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { initializeWebVitals } from './utils/monitoring'
import './index.css'
import App from './App.jsx'

// Initialize performance monitoring
initializeWebVitals()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
