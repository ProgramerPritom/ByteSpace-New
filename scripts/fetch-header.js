const fs = require('fs');

const env = fs.readFileSync('.env', 'utf-8');
const token = env.match(/FIGMA_TOKEN=(.*)/)[1].trim();
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function inspectHeader() {
  const res = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=1:1778`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  fs.writeFileSync('scripts/header-data.json', JSON.stringify(data.nodes['1:1778'], null, 2));
  console.log('Header data saved to scripts/header-data.json');
}

inspectHeader().catch(console.error);
