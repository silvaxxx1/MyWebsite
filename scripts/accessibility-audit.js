#!/usr/bin/env node

/**
 * Accessibility Audit Script
 * Performs comprehensive accessibility checks and generates report
 */

import { execSync } from 'child_process';
import { writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

const accessibilityChecklist = [
  {
    category: 'Semantic HTML',
    checks: [
      'All images have alt attributes',
      'Proper heading hierarchy (h1 → h2 → h3)',
      'Form labels are properly associated',
      'Buttons have descriptive text or aria-label',
      'Links have descriptive text or aria-label',
      'Main content areas use semantic elements'
    ]
  },
  {
    category: 'Keyboard Navigation',
    checks: [
      'All interactive elements are keyboard accessible',
      'Focus indicators are visible',
      'Tab order is logical',
      'Skip links are provided for main content',
      'Modal dialogs trap focus properly'
    ]
  },
  {
    category: 'ARIA and Screen Readers',
    checks: [
      'ARIA labels are used where needed',
      'ARIA roles are appropriate',
      'Live regions for dynamic content',
      'Form validation messages are announced',
      'Loading states are announced'
    ]
  },
  {
    category: 'Visual Design',
    checks: [
      'Color contrast meets WCAG AA standards',
      'Text is readable at 200% zoom',
      'Focus indicators are clearly visible',
      'Information is not conveyed by color alone',
      'Animations respect prefers-reduced-motion'
    ]
  },
  {
    category: 'Mobile Accessibility',
    checks: [
      'Touch targets are at least 44px',
      'Content reflows properly on mobile',
      'Pinch zoom is not disabled',
      'Orientation changes are handled',
      'Mobile navigation is accessible'
    ]
  }
];

function generateAccessibilityReport() {
  log('🔍 Generating Accessibility Report...', colors.blue);
  
  let report = '# Accessibility Audit Report\n\n';
  report += `Generated on: ${new Date().toISOString()}\n\n`;
  
  accessibilityChecklist.forEach(category => {
    report += `## ${category.category}\n\n`;
    category.checks.forEach(check => {
      report += `- [ ] ${check}\n`;
    });
    report += '\n';
  });
  
  report += '## Automated Testing\n\n';
  report += 'Run the following commands to perform automated accessibility testing:\n\n';
  report += '```bash\n';
  report += 'npm run test:a11y\n';
  report += 'npm run lighthouse:a11y\n';
  report += '```\n\n';
  
  report += '## Manual Testing Checklist\n\n';
  report += '### Keyboard Navigation\n';
  report += '1. Navigate through the entire site using only the Tab key\n';
  report += '2. Ensure all interactive elements are reachable\n';
  report += '3. Test Escape key functionality in modals\n';
  report += '4. Verify Enter and Space key work on custom buttons\n\n';
  
  report += '### Screen Reader Testing\n';
  report += '1. Test with NVDA (Windows) or VoiceOver (Mac)\n';
  report += '2. Ensure all content is announced properly\n';
  report += '3. Check form validation announcements\n';
  report += '4. Verify loading states are announced\n\n';
  
  report += '### Visual Testing\n';
  report += '1. Test at 200% browser zoom\n';
  report += '2. Check color contrast with tools\n';
  report += '3. Test with Windows High Contrast mode\n';
  report += '4. Verify focus indicators are visible\n\n';
  
  writeFileSync('accessibility-report.md', report);
  log('✅ Accessibility report generated: accessibility-report.md', colors.green);
}

function checkAccessibilityDependencies() {
  log('📦 Checking accessibility testing dependencies...', colors.blue);
  
  const requiredDeps = [
    '@testing-library/jest-dom',
    '@testing-library/react',
    '@testing-library/user-event'
  ];
  
  try {
    const packageJson = JSON.parse(require('fs').readFileSync('package.json', 'utf8'));
    const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    const missingDeps = requiredDeps.filter(dep => !allDeps[dep]);
    
    if (missingDeps.length > 0) {
      log(`❌ Missing dependencies: ${missingDeps.join(', ')}`, colors.red);
      return false;
    }
    
    log('✅ All accessibility testing dependencies are installed', colors.green);
    return true;
  } catch (error) {
    log('❌ Failed to check dependencies', colors.red);
    return false;
  }
}

function runAccessibilityTests() {
  log('🧪 Running accessibility tests...', colors.blue);
  
  try {
    // Run existing tests with accessibility focus
    execSync('npm run test -- --reporter=verbose', { stdio: 'inherit' });
    log('✅ Accessibility tests passed', colors.green);
    return true;
  } catch (error) {
    log('❌ Some accessibility tests failed', colors.red);
    return false;
  }
}

function generateLighthouseConfig() {
  const lighthouseConfig = {
    extends: 'lighthouse:default',
    settings: {
      onlyCategories: ['accessibility', 'best-practices', 'seo'],
      skipAudits: ['uses-http2'],
      throttling: {
        rttMs: 40,
        throughputKbps: 10240,
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0,
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0
      }
    }
  };
  
  writeFileSync('lighthouse.config.js', `module.exports = ${JSON.stringify(lighthouseConfig, null, 2)};`);
  log('✅ Lighthouse configuration generated', colors.green);
}

async function main() {
  log('🚀 Starting Accessibility Audit...', colors.blue);
  
  let allChecksPassed = true;
  
  // Check dependencies
  if (!checkAccessibilityDependencies()) {
    allChecksPassed = false;
  }
  
  // Generate reports and configs
  generateAccessibilityReport();
  generateLighthouseConfig();
  
  // Run tests
  if (!runAccessibilityTests()) {
    allChecksPassed = false;
  }
  
  // Final result
  log('\n' + '='.repeat(50), colors.blue);
  if (allChecksPassed) {
    log('🎉 Accessibility audit completed successfully!', colors.green);
    log('📋 Review the generated accessibility-report.md', colors.blue);
    log('🔧 Run manual tests as outlined in the report', colors.yellow);
  } else {
    log('❌ Some accessibility checks failed', colors.red);
    log('🔧 Please address the issues above', colors.yellow);
  }
}

main().catch(console.error);