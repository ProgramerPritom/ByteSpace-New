const fs = require('fs');
const https = require('https');
const env = fs.readFileSync('.env', 'utf-8');
const tokenMatch = env.match(/FIGMA_TOKEN=(.*)/);
const token = tokenMatch ? tokenMatch[1].trim() : '';
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function fetchImage(nodeId, filename) {
  try {
    const res = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${nodeId}&format=png&scale=2`, {
      headers: { 'X-Figma-Token': token }
    });
    if (res.status === 429) { console.error("429"); return; }
    const data = await res.json();
    const url = data.images[nodeId];
    if (url) {
      const file = fs.createWriteStream(`public/courses/${filename}.png`);
      https.get(url, function(response) {
        response.pipe(file);
        file.on('finish', () => { file.close(); console.log(`Downloaded ${filename}`); });
      });
    }
  } catch(e) { console.error(e); }
}

async function main() {
  if (!fs.existsSync('public/courses')) fs.mkdirSync('public/courses', { recursive: true });
  
  const res = await fetch(`https://api.figma.com/v1/files/${fileKey}?ids=11:21`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  const cats = data.document.children[0].children[0].children.find(c => c.id === '11:21');
  
  // Try to find the image rectangles inside the cards
  // cats should be Categories_Cards_Frame
  cats.children.forEach((row, i) => {
    if (row.children) {
      row.children.forEach((card, j) => {
        // card is Course_Card
        // We want the image part. Let's just download the whole card as an image for reference? No, the thumbnail.
        // Usually the thumbnail is a rectangle inside the card.
        const thumb = card.children.find(c => c.type === 'RECTANGLE' || c.name.includes('Image') || c.name.includes('Rectangle'));
        if (thumb) {
          console.log(`Found thumb for card ${i}-${j}: ${thumb.id}`);
          fetchImage(thumb.id, `course-thumb-${i}-${j}`);
        } else {
          // If no thumb, try downloading the first child
          fetchImage(card.children[0].id, `course-thumb-${i}-${j}`);
        }
      });
    }
  });
  
  fs.writeFileSync('courses-frame-data.json', JSON.stringify(cats, null, 2));
}

main().catch(console.error);
