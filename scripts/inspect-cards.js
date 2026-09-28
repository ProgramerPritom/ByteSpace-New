const fs = require('fs');
const token = fs.readFileSync('.env', 'utf-8').match(/FIGMA_TOKEN=(.*)/)[1].trim();
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function inspectCards() {
  const res = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=1:1821,1:1797,46:126`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  
  function printNode(node, indent = '') {
    console.log(`${indent}[${node.id}] "${node.name}" (${node.type}) ${node.absoluteBoundingBox ? Math.round(node.absoluteBoundingBox.width) + 'x' + Math.round(node.absoluteBoundingBox.height) : ''}`);
    if (node.children) {
      node.children.forEach(c => printNode(c, indent + '  '));
    }
  }

  for (const [id, n] of Object.entries(data.nodes)) {
    console.log(`\n=== Card ${id} ===`);
    printNode(n.document);
  }
}
inspectCards();
