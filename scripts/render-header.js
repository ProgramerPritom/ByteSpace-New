const fs = require('fs');
const token = fs.readFileSync('.env', 'utf-8').match(/FIGMA_TOKEN=(.*)/)[1].trim();

async function renderHeaderImage() {
  const res = await fetch('https://api.figma.com/v1/images/ekINKs7aTmnhWwjKSNZxwF?ids=1:1778&format=png&scale=2', {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  const imageUrl = data.images['1:1778'];
  console.log('Header Image URL:', imageUrl);
  
  if (imageUrl) {
    const imgRes = await fetch(imageUrl);
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    if (!fs.existsSync('public/figma-renders')) {
      fs.mkdirSync('public/figma-renders', { recursive: true });
    }
    fs.writeFileSync('public/figma-renders/header-figma.png', buffer);
    console.log('Saved public/figma-renders/header-figma.png');
  }
}
renderHeaderImage();
