const fs = require('fs');
const token = fs.readFileSync('.env', 'utf-8').match(/FIGMA_TOKEN=(.*)/)[1].trim();
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function exportAvatars() {
  const res = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=1:1827&format=png&scale=2`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  const url = data.images && data.images['1:1827'];
  console.log('Avatars URL:', url);
  if (url) {
    const imgRes = await fetch(url);
    const buf = Buffer.from(await imgRes.arrayBuffer());
    fs.writeFileSync('public/hero/avatars-row.png', buf);
    console.log('Saved public/hero/avatars-row.png');
  }
}
exportAvatars();
