const fs = require('fs');
const env = fs.readFileSync('.env', 'utf-8');
const tokenMatch = env.match(/FIGMA_TOKEN=(.*)/);
const token = tokenMatch ? tokenMatch[1].trim() : '';
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function main() {
  const res = await fetch(`https://api.figma.com/v1/files/${fileKey}`, {
    headers: { 'X-Figma-Token': token }
  });
  if (res.status === 429) {
    console.error("429 Rate limit exceeded");
    return;
  }
  const data = await res.json();
  const canvas = data.document.children.find(c => c.name === 'Page 1' || c.name.includes('Design'));
  const homeNode = canvas.children.find(c => c.name === 'Home');
  
  console.log('Children of Home:');
  homeNode.children.forEach(c => console.log(`[${c.id}] ${c.name}`));
}

main().catch(console.error);
