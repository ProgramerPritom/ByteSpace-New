const sharp = require('sharp');

async function trimOrnaments() {
  const trimmed = await sharp('public/hero/3d-ornaments.png').trim().toBuffer();
  await sharp(trimmed).toFile('public/hero/3d-ornaments-trimmed.png');
  console.log('Saved 3d-ornaments-trimmed.png');
}
trimOrnaments();
