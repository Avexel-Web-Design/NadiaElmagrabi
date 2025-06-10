'use client'
import { useState, useEffect } from 'react'
import { dailyQuotes } from '../data/dailyQuotes'

export function useDailyQuote() {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const getCurrentDayOfYear = () => {
      const now = new Date()
      const start = new Date(now.getFullYear(), 0, 0)
      const diff = now.getTime() - start.getTime()
      const oneDay = 1000 * 60 * 60 * 24
      return Math.floor(diff / oneDay)
    }

    const dayOfYear = getCurrentDayOfYear()
    // Use modulo to ensure we stay within the bounds of our quotes array
    const quoteIndex = (dayOfYear - 1) % dailyQuotes.length
    setQuote(dailyQuotes[quoteIndex])
  }, [])

  return quote
}
