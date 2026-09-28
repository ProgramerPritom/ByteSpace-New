const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scripts/header-data.json', 'utf8'));
const doc = data.document;

console.log('Header Box:', doc.absoluteBoundingBox);
doc.children.forEach(c => {
  console.log(c.name, c.id, c.absoluteBoundingBox, 'relative X:', c.absoluteBoundingBox.x - doc.absoluteBoundingBox.x, 'relative Y:', c.absoluteBoundingBox.y - doc.absoluteBoundingBox.y);
});
