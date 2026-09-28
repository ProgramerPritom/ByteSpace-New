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
  if (!canvas) { console.log('Canvas not found'); return; }
  
  const homeNode = canvas.children.find(c => c.name === 'Home');
  if (!homeNode) { console.log('Home not found'); return; }
  
  console.log(`Home Node ID: ${homeNode.id}`);
  
  const frame2 = homeNode.children.find(c => c.name === 'Frame 2') || homeNode;
  const coursesFrame = frame2.children.find(c => c.name === 'Courses_Cards_Frame' || c.name.includes('Courses') || c.name.includes('Discover'));
  
  if (!coursesFrame) {
    console.log('Courses frame not found. Here are the children of Frame 2:');
    frame2.children.forEach(c => console.log(`[${c.id}] ${c.name}`));
    return;
  }
  
  console.log(`\nCourses Frame: [${coursesFrame.id}] ${coursesFrame.name}`);
  fs.writeFileSync('courses-data.json', JSON.stringify(coursesFrame, null, 2));
  console.log('Saved to courses-data.json');
}

main().catch(console.error);
