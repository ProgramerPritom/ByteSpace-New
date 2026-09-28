const fs = require('fs');

const env = fs.readFileSync('.env', 'utf-8');
const token = env.match(/FIGMA_TOKEN=(.*)/)[1].trim();
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function inspectHeroDetailed() {
  const res = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=1:1695`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  fs.writeFileSync('scripts/hero-data.json', JSON.stringify(data.nodes['1:1695'], null, 2));
  console.log('Saved scripts/hero-data.json');

  const imgRes = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=1:1695&format=png&scale=2`, {
    headers: { 'X-Figma-Token': token }
  });
  const imgData = await imgRes.json();
  const url = imgData.images['1:1695'];
  if (url) {
    const fetchImg = await fetch(url);
    const buf = Buffer.from(await fetchImg.arrayBuffer());
    if (!fs.existsSync('public/figma-renders')) {
      fs.mkdirSync('public/figma-renders', { recursive: true });
    }
    fs.writeFileSync('public/figma-renders/hero-figma.png', buf);
    console.log('Saved public/figma-renders/hero-figma.png');
  }
}

inspectHeroDetailed().catch(console.error);
