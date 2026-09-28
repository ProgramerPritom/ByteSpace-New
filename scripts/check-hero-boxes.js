const fs = require('fs');
const token = fs.readFileSync('.env', 'utf-8').match(/FIGMA_TOKEN=(.*)/)[1].trim();

async function checkCoords() {
  const res = await fetch('https://api.figma.com/v1/files/ekINKs7aTmnhWwjKSNZxwF/nodes?ids=1:1866,1:1796,1:1769,12:224', {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  for (const [id, node] of Object.entries(data.nodes)) {
    console.log(id, node.document.name, node.document.absoluteBoundingBox);
  }
}
checkCoords();
