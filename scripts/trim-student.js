const sharp = require('sharp');

async function processAssets() {
  // Let's trim student.png so it has 0 transparent padding
  const trimmed = await sharp('public/hero/student.png').trim().toBuffer();
  await sharp(trimmed).toFile('public/hero/student-trimmed.png');
  console.log('Saved student-trimmed.png');

  // Let's check dimensions of trimmed student
  const meta = await sharp('public/hero/student-trimmed.png').metadata();
  console.log('Trimmed student meta:', meta.width, 'x', meta.height);
}

processAssets();
