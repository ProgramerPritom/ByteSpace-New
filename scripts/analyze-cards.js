const fs = require('fs');

const data = JSON.parse(fs.readFileSync('courses-frame-data.json', 'utf8'));

// The data is Categories_Cards_Frame (11:21).
// Look at children. We want the Course_Card.
// It's likely in data.children[1] or something since children[0] might be the Tab_Categories?
// Actually we can just find any node with name 'Course_Card' recursively.
let cardNode = null;
function findCard(node) {
  if (node.name === 'Course_Card' || node.name.includes('Card') || node.name === 'Course') {
    cardNode = node;
    return true;
  }
  if (node.children) {
    for (const c of node.children) {
      if (findCard(c)) return true;
    }
  }
  return false;
}
findCard(data);

if (cardNode) {
  console.log("Card Background:", cardNode.background);
  console.log("Card Fills:", cardNode.fills);
  console.log("Card Corner Radius:", cardNode.cornerRadius);
  console.log("Card Borders:", cardNode.strokes);
  console.log("Card Stroke Weight:", cardNode.strokeWeight);
  console.log("Card Padding:", {
    t: cardNode.paddingTop,
    b: cardNode.paddingBottom,
    l: cardNode.paddingLeft,
    r: cardNode.paddingRight
  });
  console.log("Card Shadows:", cardNode.effects);
  
  // Find avatars and images
  function logImages(node, indent='') {
    if (node.type === 'RECTANGLE' || node.type === 'ELLIPSE' || node.name.includes('Image')) {
      const fills = node.fills || [];
      const imageFills = fills.filter(f => f.type === 'IMAGE');
      if (imageFills.length > 0) {
        console.log(`${indent}Image Node: [${node.id}] ${node.name} (${node.type}) - ${node.absoluteBoundingBox.width}x${node.absoluteBoundingBox.height}`);
      }
    }
    if (node.children) {
      node.children.forEach(c => logImages(c, indent + '  '));
    }
  }
  logImages(cardNode);
} else {
  console.log("No card found");
}
