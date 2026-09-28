const fs = require('fs');

const env = fs.readFileSync('.env', 'utf-8');
const token = env.match(/FIGMA_TOKEN=(.*)/)[1].trim();
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function checkGridLines() {
  const res = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=12:239`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  if (data.nodes && data.nodes['12:239']) {
    const line = data.nodes['12:239'].document;
    console.log('Line stroke:', line.strokes, 'opacity:', line.opacity);
  } else {
    console.log('Data:', data);
  }
}
checkGridLines();
