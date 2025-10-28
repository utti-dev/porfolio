// Simple error tracking utility
// In production, replace with your preferred error tracking service (Sentry, LogRocket, etc.)

const isDev = process.env.NODE_ENV === 'development'

export function trackError(error, errorInfo = {}) {
  if (isDev) {
    console.group('Error Tracked')
    console.error(error)
    console.info('Additional Info:', errorInfo)
    console.groupEnd()
    return
  }

  // In production, you would send this to your error tracking service
  const errorData = {
    error: {
      message: error.message,
      stack: error.stack,
      name: error.name
    },
    errorInfo,
    url: window.location.href,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  }

  // Example of sending to an error tracking endpoint
  // Replace with your actual error tracking service integration
  if (import.meta.env.VITE_ERROR_ENDPOINT) {
    fetch(import.meta.env.VITE_ERROR_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(errorData)
    }).catch(console.error) // Fail silently in production
  }
}