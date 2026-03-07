import { useState, useEffect } from 'react'

interface PerformanceInfo {
  isLowEnd: boolean
  deviceMemory: number | undefined
  hardwareConcurrency: number | undefined
  connectionType: string | undefined
  effectiveType: string | undefined
}

export function usePerformance(): PerformanceInfo {
  const [performanceInfo, setPerformanceInfo] = useState<PerformanceInfo>({
    isLowEnd: false,
    deviceMemory: undefined,
    hardwareConcurrency: undefined,
    connectionType: undefined,
    effectiveType: undefined
  })

  useEffect(() => {
    // @ts-ignore - These APIs are not in all browsers
    const deviceMemory = navigator.deviceMemory
    // @ts-ignore
    const hardwareConcurrency = navigator.hardwareConcurrency
    // @ts-ignore
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

    // Determine if device is low-end
    const isLowEnd =
      (deviceMemory !== undefined && deviceMemory < 4) ||
      (hardwareConcurrency !== undefined && hardwareConcurrency < 4) ||
      (connection && (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g'))

    setPerformanceInfo({
      isLowEnd,
      deviceMemory,
      hardwareConcurrency,
      connectionType: connection?.type,
      effectiveType: connection?.effectiveType
    })
  }, [])

  return performanceInfo
}

// Hook to conditionally enable features based on performance
export function useFeatureFlags() {
  const performance = usePerformance()
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return {
    // Disable animations on low-end devices or if user prefers reduced motion
    enableAnimations: !performance.isLowEnd && !prefersReducedMotion,
    // Enable heavy features only on capable devices
    enableHeavyFeatures: !performance.isLowEnd,
    // Reduce animation quality on low-end devices
    reduceMotion: performance.isLowEnd || prefersReducedMotion
  }
}
