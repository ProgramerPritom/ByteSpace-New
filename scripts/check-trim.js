const sharp = require('sharp');

async function checkStudent() {
  const meta = await sharp('public/hero/student.png').metadata();
  console.log('Metadata:', meta);
  
  // Let's check trimmed bounding box of student.png
  const { info } = await sharp('public/hero/student.png').trim().toBuffer({ resolveWithObject: true });
  console.log('Trim info:', info);
}

checkStudent();
