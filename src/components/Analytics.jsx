import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    // Track pageviews on route change
    const path = location.pathname + location.search
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    })
  }, [location])

  if (!GA_MEASUREMENT_ID) return null

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  )
}