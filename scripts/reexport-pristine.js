const fs = require('fs');
const token = fs.readFileSync('.env', 'utf-8').match(/FIGMA_TOKEN=(.*)/)[1].trim();
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function exportOriginals() {
  const ids = ['1:1796', '46:79', '1:1827'];
  const res = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${ids.join(',')}&format=png&scale=2`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  
  const map = {
    '1:1796': 'public/hero/student.png',
    '46:79': 'public/hero/3d-ornaments.png',
    '1:1827': 'public/hero/avatars-row.png'
  };

  for (const [id, filepath] of Object.entries(map)) {
    const url = data.images[id];
    if (url) {
      const imgRes = await fetch(url);
      const buf = Buffer.from(await imgRes.arrayBuffer());
      fs.writeFileSync(filepath, buf);
      console.log('Saved original:', filepath);
    }
  }
}
exportOriginals();
