const sharp = require('sharp');

async function inspectHeroFull() {
  const meta = await sharp('public/figma-renders/hero-full.png').metadata();
  console.log('Hero Full Meta (2x scale):', meta.width, 'x', meta.height);
  // Hero is 2880 x 2048 (1440 x 1024 at 1x).
}

inspectHeroFull();
