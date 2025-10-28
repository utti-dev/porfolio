const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const { writeFileSync } = require('fs');
const { join } = require('path');

async function runLighthouse() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };

  const url = 'https://portfolio-utti-dev.vercel.app';
  const runnerResult = await lighthouse(url, options);
  const reportPath = join(__dirname, 'lighthouse-report.html');
  writeFileSync(reportPath, runnerResult.report);

  console.log('Performance score:', runnerResult.lhr.categories.performance.score * 100);
  console.log('Accessibility score:', runnerResult.lhr.categories.accessibility.score * 100);
  console.log('Best practices score:', runnerResult.lhr.categories['best-practices'].score * 100);
  console.log('SEO score:', runnerResult.lhr.categories.seo.score * 100);

  await chrome.kill();
}