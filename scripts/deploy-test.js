#!/usr/bin/env node

/**
 * Deployment Test Script
 * Tests the build process and verifies deployment readiness
 */

import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';
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

function checkFile(filePath, description) {
  if (existsSync(filePath)) {
    log(`✅ ${description} exists`, colors.green);
    return true;
  } else {
    log(`❌ ${description} missing: ${filePath}`, colors.red);
    return false;
  }
}

function runCommand(command, description) {
  try {
    log(`🔄 ${description}...`, colors.blue);
    execSync(command, { stdio: 'inherit' });
    log(`✅ ${description} completed`, colors.green);
    return true;
  } catch (error) {
    log(`❌ ${description} failed`, colors.red);
    console.error(error.message);
    return false;
  }
}

async function main() {
  log('🚀 Starting deployment test...', colors.blue);
  
  let allTestsPassed = true;
  
  // Check required files
  const requiredFiles = [
    ['package.json', 'Package configuration'],
    ['vite.config.ts', 'Vite configuration'],
    ['.github/workflows/deploy.yml', 'GitHub Actions workflow'],
    ['public/404.html', 'SPA routing fallback'],
    ['.env.production', 'Production environment variables']
  ];
  
  log('\n📋 Checking required files...', colors.yellow);
  for (const [file, description] of requiredFiles) {
    if (!checkFile(file, description)) {
      allTestsPassed = false;
    }
  }
  
  // Check package.json scripts
  log('\n📦 Checking package.json scripts...', colors.yellow);
  try {
    const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
    const requiredScripts = ['build', 'build:prod', 'preview'];
    
    for (const script of requiredScripts) {
      if (packageJson.scripts[script]) {
        log(`✅ Script "${script}" exists`, colors.green);
      } else {
        log(`❌ Script "${script}" missing`, colors.red);
        allTestsPassed = false;
      }
    }
  } catch (error) {
    log('❌ Failed to read package.json', colors.red);
    allTestsPassed = false;
  }
  
  // Test build process
  log('\n🏗️ Testing build process...', colors.yellow);
  if (!runCommand('npm run build:prod', 'Production build')) {
    allTestsPassed = false;
  }
  
  // Check build output
  log('\n📁 Checking build output...', colors.yellow);
  const buildFiles = [
    ['dist/index.html', 'Main HTML file'],
    ['dist/assets', 'Assets directory']
  ];
  
  for (const [file, description] of buildFiles) {
    if (!checkFile(file, description)) {
      allTestsPassed = false;
    }
  }
  
  // Check index.html for SPA routing script
  log('\n🔍 Checking SPA routing configuration...', colors.yellow);
  try {
    const indexHtml = readFileSync('dist/index.html', 'utf8');
    if (indexHtml.includes('Single Page Apps for GitHub Pages')) {
      log('✅ SPA routing script found in index.html', colors.green);
    } else {
      log('❌ SPA routing script missing from index.html', colors.red);
      allTestsPassed = false;
    }
  } catch (error) {
    log('❌ Failed to read dist/index.html', colors.red);
    allTestsPassed = false;
  }
  
  // Final result
  log('\n' + '='.repeat(50), colors.blue);
  if (allTestsPassed) {
    log('🎉 All deployment tests passed!', colors.green);
    log('✅ Ready for GitHub Pages deployment', colors.green);
    process.exit(0);
  } else {
    log('❌ Some deployment tests failed', colors.red);
    log('🔧 Please fix the issues above before deploying', colors.yellow);
    process.exit(1);
  }
}

main().catch(console.error);