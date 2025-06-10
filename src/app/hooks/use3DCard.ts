'use client'
import { useRef, useCallback } from 'react'

interface Use3DCardOptions {
  maxRotateX?: number
  maxRotateY?: number
  scale?: number
  perspective?: number
}

export function use3DCard(options: Use3DCardOptions = {}) {
  const {
    maxRotateX = 15,
    maxRotateY = 15,
    scale = 1.05,
    perspective = 1000
  } = options

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Add buffer zone to prevent edge teleporting
    const bufferZone = 20
    const effectiveX = Math.max(bufferZone, Math.min(rect.width - bufferZone, x))
    const effectiveY = Math.max(bufferZone, Math.min(rect.height - bufferZone, y))

    // Calculate rotation with dampening near edges
    const normalizedX = (effectiveX - centerX) / (centerX - bufferZone)
    const normalizedY = (effectiveY - centerY) / (centerY - bufferZone)

    const rotateX = normalizedY * -maxRotateX
    const rotateY = normalizedX * maxRotateY

    card.style.transform = `
      perspective(${perspective}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(${scale}, ${scale}, ${scale})
    `
  }, [maxRotateX, maxRotateY, scale, perspective])

  const handleMouseEnter = useCallback(() => {
    if (!cardRef.current) return
    const card = cardRef.current
    card.style.transition = 'transform 0.15s ease-out'
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    
    const card = cardRef.current
    
    card.style.transition = 'transform 0.6s ease-out'
    card.style.transform = `
      perspective(${perspective}px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `
  }, [perspective])

  return {
    cardRef,
    cardProps: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      style: {
        transformStyle: 'preserve-3d' as const,
        transition: 'transform 0.5s ease-out'
      }
    }
  }
}
