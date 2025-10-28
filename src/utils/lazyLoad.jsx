import { lazy, Suspense } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'

export function lazyLoad(importFunc) {
  const LazyComponent = lazy(importFunc)

  return function LazyLoadWrapper(props) {
    return (
      <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center"><LoadingSpinner size="lg" /></div>}>
        <LazyComponent {...props} />
      </Suspense>
    )
  }
}