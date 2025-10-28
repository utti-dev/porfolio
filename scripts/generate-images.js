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
    background: '#1a365d',
    text: 'E-commerce Platform'
  },
  {
    name: 'weather',
    width: 800,
    height: 600,
    background: '#2d3748',
    text: 'Weather Dashboard'
  },
  {
    name: 'tasks',
    width: 800,
    height: 600,
    background: '#2a4365',
    text: 'Task Manager'
  }
];

async function generateImages() {
  const outputDir = path.join(__dirname, 'public', 'images');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const img of images) {
    const svgBuffer = Buffer.from(`
      <svg width="${img.width}" height="${img.height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${img.background}"/>
        <text
          x="50%"
          y="50%"
          font-family="Arial"
          font-size="32"
          fill="white"
          text-anchor="middle"
          dominant-baseline="middle"
        >${img.text}</text>
      </svg>
    `);

    await sharp(svgBuffer)
      .png()
      .toFile(path.join(outputDir, `${img.name}.png`));

    console.log(`Generated ${img.name}.png`);
  }
}

generateImages().catch(console.error);