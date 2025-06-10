import { useEffect, useState } from 'react'

export function useStaggeredAnimation(delay: number = 0) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return isVisible
}

export function useDelayedAnimation(baseDelay: number = 0) {
  const [animationsReady, setAnimationsReady] = useState(false)

  useEffect(() => {
    // Wait for the page to be fully loaded to prevent conflicts
    const timer = setTimeout(() => {
      setAnimationsReady(true)
    }, baseDelay + 100) // Add 100ms buffer

    return () => clearTimeout(timer)
  }, [baseDelay])

  return animationsReady
}
