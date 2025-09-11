"use client"

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const step = end / (duration / 16)
      const timer = setInterval(() => {
        start += step
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return <span ref={ref}>{count}</span>
}