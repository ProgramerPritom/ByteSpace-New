const sharp = require('sharp');

async function extractBottom() {
  // Let's crop the bottom 400px of hero-full.png (at 1x, so bottom 800px at 2x)
  await sharp('public/figma-renders/hero-full.png')
    .extract({ left: 0, top: 2048 - 800, width: 2880, height: 800 })
    .toFile('public/figma-renders/hero-bottom-crop.png');
  console.log('Saved hero-bottom-crop.png');
}
extractBottom();
