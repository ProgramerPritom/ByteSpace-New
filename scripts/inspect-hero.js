const fs = require('fs');

const env = fs.readFileSync('.env', 'utf-8');
const token = env.match(/FIGMA_TOKEN=(.*)/)[1].trim();
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function inspectHero() {
  const res = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=1:1695`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  const heroNode = data.nodes['1:1695'].document;
  
  console.log('--- Hero_Frame (1:1695) Children ---');
  if (heroNode.children) {
    heroNode.children.forEach((c, idx) => {
      console.log(`${idx + 1}. [${c.id}] "${c.name}" (${c.type}) - ${Math.round(c.absoluteBoundingBox?.width || 0)}x${Math.round(c.absoluteBoundingBox?.height || 0)} y:${Math.round(c.absoluteBoundingBox?.y || 0)}`);
      if (c.children) {
        c.children.forEach((sub, sidx) => {
          console.log(`   └─ ${idx + 1}.${sidx + 1} [${sub.id}] "${sub.name}" (${sub.type})`);
        });
      }
    });
  }
}

inspectHero().catch(console.error);
