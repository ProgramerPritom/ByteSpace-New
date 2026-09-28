const sharp = require('sharp');

async function checkOrnaments() {
  const meta = await sharp('public/hero/3d-ornaments.png').metadata();
  console.log('Ornaments meta:', meta);
  const { info } = await sharp('public/hero/3d-ornaments.png').trim().toBuffer({ resolveWithObject: true });
  console.log('Trim info:', info);
}
checkOrnaments();
