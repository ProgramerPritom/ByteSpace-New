const fs = require('fs');

const env = fs.readFileSync('.env', 'utf-8');
const token = env.match(/FIGMA_TOKEN=(.*)/)[1].trim();
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function exportSvgs() {
  const ids = ['1:1788', '1:1786'];
  const res = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${ids.join(',')}&format=svg`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  console.log('Image URLs:', data.images);

  if (!fs.existsSync('public/icons')) {
    fs.mkdirSync('public/icons', { recursive: true });
  }

  for (const [id, url] of Object.entries(data.images)) {
    if (url) {
      const svgRes = await fetch(url);
      const svgText = await svgRes.text();
      const filename = id === '1:1788' ? 'logo-mark.svg' : 'cart-icon.svg';
      fs.writeFileSync(`public/icons/${filename}`, svgText);
      console.log(`Saved public/icons/${filename}`);
    }
  }
}

exportSvgs().catch(console.error);
