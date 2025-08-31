import React, { useEffect } from 'react';
import { usePerformance, useWebVitals } from '../hooks/usePerformance';

interface PerformanceMonitorProps {
  enabled?: boolean;
  logToConsole?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = process.env.NODE_ENV === 'development',
  logToConsole = true
}) => {
  const { metrics, markRenderComplete } = usePerformance();
  const vitals = useWebVitals();

  useEffect(() => {
    if (!enabled) return;

    markRenderComplete();

    if (logToConsole) {
      console.group('🚀 Performance Metrics');
      console.log('Load Time:', `${metrics.loadTime.toFixed(2)}ms`);
      console.log('Render Time:', `${metrics.renderTime.toFixed(2)}ms`);
      if (metrics.memoryUsage) {
        console.log('Memory Usage:', `${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB`);
      }
      console.groupEnd();

      console.group('📊 Core Web Vitals');
      console.log('First Contentful Paint (FCP):', `${vitals.FCP.toFixed(2)}ms`);
      console.log('Largest Contentful Paint (LCP):', `${vitals.LCP.toFixed(2)}ms`);
      console.log('First Input Delay (FID):', `${vitals.FID.toFixed(2)}ms`);
      console.log('Cumulative Layout Shift (CLS):', vitals.CLS.toFixed(4));
      console.groupEnd();
    }
  }, [enabled, logToConsole, metrics, vitals, markRenderComplete]);

  // Don't render anything in production
  if (!enabled) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 9999,
        pointerEvents: 'none'
      }}
    >
      <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
      <div>LCP: {vitals.LCP.toFixed(0)}ms</div>
      <div>CLS: {vitals.CLS.toFixed(3)}</div>
    </div>
  );
};

export default PerformanceMonitor;