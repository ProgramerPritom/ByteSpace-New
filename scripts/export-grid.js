const fs = require('fs');
const token = fs.readFileSync('.env', 'utf-8').match(/FIGMA_TOKEN=(.*)/)[1].trim();
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function exportGrid() {
  const res = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=12:224&format=svg`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  const url = data.images && data.images['12:224'];
  console.log('Grid SVG URL:', url);
  if (url) {
    const svgRes = await fetch(url);
    const svgText = await svgRes.text();
    fs.writeFileSync('public/hero/grid.svg', svgText);
    console.log('Saved public/hero/grid.svg');
  }
}
exportGrid();
