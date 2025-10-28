import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = [
  {
    name: 'ecommerce',
    width: 800,
    height: 600,
    gradient: ['#1a365d', '#2563eb'],
    text: 'E-commerce Platform',
    subtitle: 'Full-stack Shopping Solution'
  },
  {
    name: 'weather',
    width: 800,
    height: 600,
    gradient: ['#0f766e', '#0284c7'],
    text: 'Weather Dashboard',
    subtitle: 'Real-time Weather Updates'
  },
  {
    name: 'tasks',
    width: 800,
    height: 600,
    gradient: ['#4f46e5', '#7c3aed'],
    text: 'Task Manager',
    subtitle: 'Team Collaboration Tool'
  }
];

async function generateImages() {
  const outputDir = path.join(__dirname, 'public', 'images');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const img of images) {
    // Generate main image
    const svgBuffer = Buffer.from(`
      <svg width="${img.width}" height="${img.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-${img.name}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${img.gradient[0]};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${img.gradient[1]};stop-opacity:1" />
          </linearGradient>
          <filter id="shadow-${img.name}">
            <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad-${img.name})"/>
        <rect width="90%" height="70%" x="5%" y="15%" fill="rgba(255,255,255,0.1)" rx="8"/>
        <text
          x="50%"
          y="50%"
          font-family="Arial, sans-serif"
          font-size="32"
          font-weight="bold"
          fill="white"
          text-anchor="middle"
          dominant-baseline="middle"
          filter="url(#shadow-${img.name})"
        >${img.text}</text>
        <text
          x="50%"
          y="calc(50% + 40)"
          font-family="Arial, sans-serif"
          font-size="18"
          fill="rgba(255,255,255,0.8)"
          text-anchor="middle"
          dominant-baseline="middle"
        >${img.subtitle}</text>
      </svg>
    `);

    // Also generate favicon and OG image
    if (img.name === 'ecommerce') {
      const faviconSvg = Buffer.from(`
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#1a365d"/>
          <text
            x="50%"
            y="50%"
            font-family="Arial"
            font-size="20"
            fill="white"
            text-anchor="middle"
            dominant-baseline="middle"
          >P</text>
        </svg>
      `);

      const ogImageSvg = Buffer.from(`
        <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#1a365d"/>
          <text
            x="50%"
            y="50%"
            font-family="Arial"
            font-size="72"
            fill="white"
            text-anchor="middle"
            dominant-baseline="middle"
          >Portfolio</text>
        </svg>
      `);

      await sharp(faviconSvg)
        .png()
        .toFile(path.join(outputDir, 'favicon.png'));

      await sharp(ogImageSvg)
        .png()
        .toFile(path.join(outputDir, 'og-image.png'));

      console.log('Generated favicon.png and og-image.png');
    }

    // Generate both WebP and PNG formats for better performance
    await Promise.all([
      sharp(svgBuffer)
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `${img.name}.webp`)),
      sharp(svgBuffer)
        .png({ compressionLevel: 9 })
        .toFile(path.join(outputDir, `${img.name}.png`))
    ]);

    console.log(`Generated ${img.name}.png`);
  }
}

generateImages().catch(console.error);