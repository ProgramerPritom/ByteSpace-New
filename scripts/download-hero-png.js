const fs = require('fs');
const token = fs.readFileSync('.env', 'utf-8').match(/FIGMA_TOKEN=(.*)/)[1].trim();
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function downloadHeroPng() {
  const res = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=1:1695&format=png&scale=2`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  const url = data.images['1:1695'];
  console.log('Hero image url:', url);
  if (url) {
    const imgRes = await fetch(url);
    const buf = Buffer.from(await imgRes.arrayBuffer());
    if (!fs.existsSync('public/figma-renders')) {
      fs.mkdirSync('public/figma-renders', { recursive: true });
    }
    fs.writeFileSync('public/figma-renders/hero-full.png', buf);
    console.log('Saved public/figma-renders/hero-full.png');
  }
}
downloadHeroPng();
