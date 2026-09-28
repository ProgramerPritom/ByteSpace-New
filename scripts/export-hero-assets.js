const fs = require('fs');
const token = fs.readFileSync('.env', 'utf-8').match(/FIGMA_TOKEN=(.*)/)[1].trim();
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function exportHeroAssets() {
  const ids = [
    '1:1796', // Person Image
    '46:79',  // 3d ornament
    '1:1866', // Ellipse 7 (lime circle)
    '12:224', // Grid lines Group 4
    '1:1797', // Learning progress card
    '1:1821', // Student/Avatar card
    '46:126', // UI/UX design card
  ];
  const res = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${ids.join(',')}&format=png&scale=2`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  console.log('Images available:', Object.keys(data.images || {}));

  if (!fs.existsSync('public/hero')) {
    fs.mkdirSync('public/hero', { recursive: true });
  }

  const nameMap = {
    '1:1796': 'student.png',
    '46:79': '3d-ornaments.png',
    '1:1866': 'lime-ellipse.png',
    '12:224': 'grid-lines.png',
    '1:1797': 'card-learning-progress.png',
    '1:1821': 'card-happy-students.png',
    '46:126': 'card-ui-ux.png',
  };

  for (const [id, filename] of Object.entries(nameMap)) {
    const url = data.images[id];
    if (url) {
      const imgRes = await fetch(url);
      const buf = Buffer.from(await imgRes.arrayBuffer());
      fs.writeFileSync(`public/hero/${filename}`, buf);
      console.log(`Saved public/hero/${filename}`);
    }
  }
}
exportHeroAssets();
