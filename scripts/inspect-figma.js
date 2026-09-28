const fs = require('fs');

const env = fs.readFileSync('.env', 'utf-8');
const tokenMatch = env.match(/FIGMA_TOKEN=(.*)/);
const token = tokenMatch ? tokenMatch[1].trim() : '';
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function main() {
  const res = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=1:1067,73:753,73:1014,73:1039`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  const homeNode = data.nodes['1:1067'].document;
  
  console.log('--- HOME PAGE (1:1067) ---');
  console.log('Size:', homeNode.absoluteBoundingBox);
  console.log('Children count:', homeNode.children ? homeNode.children.length : 0);
  
  if (homeNode.children) {
    homeNode.children.forEach((c, idx) => {
      console.log(`${idx + 1}. [${c.id}] "${c.name}" (${c.type}) - ${Math.round(c.absoluteBoundingBox?.width || 0)}x${Math.round(c.absoluteBoundingBox?.height || 0)}`);
    });
  }

  // Let's also inspect Typography and Colors
  console.log('\n--- STYLE GUIDE TOKENS ---');
  const styleNodes = [data.nodes['73:753'], data.nodes['73:1014'], data.nodes['73:1039']];
  styleNodes.forEach(s => {
    if (s && s.document) {
      console.log(`Style Node: [${s.document.id}] ${s.document.name}`);
    }
  });
}

main().catch(console.error);
