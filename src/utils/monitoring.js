// Web Vitals monitoring
import { onCLS, onFID, onLCP } from 'web-vitals'

function sendToAnalytics(metric) {
  const body = {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    navigationType: metric.navigationType
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', body)
    return
  }

  // Send to Vercel Analytics in production
  const analyticsId = import.meta.env.VITE_VERCEL_ANALYTICS_ID
  if (analyticsId) {
    fetch(`https://vitals.vercel-analytics.com/v1/vitals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dsn: analyticsId,
        ...body,
      }),
    }).catch(() => {
      // Fail silently to avoid affecting the user experience
    })
  }
}

export function initializeWebVitals() {
  onCLS(sendToAnalytics)
  onFID(sendToAnalytics)
  onLCP(sendToAnalytics)
}