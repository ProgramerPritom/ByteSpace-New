const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scripts/header-data.json', 'utf8'));
const doc = data.document;

console.log('Header Name:', doc.name, 'Type:', doc.type);
console.log('Bounding Box:', doc.absoluteBoundingBox);
console.log('Layout Mode:', doc.layoutMode, 'Padding:', {
  left: doc.paddingLeft,
  right: doc.paddingRight,
  top: doc.paddingTop,
  bottom: doc.paddingBottom,
  gap: doc.itemSpacing
});

function inspectChildren(node, depth = 0) {
  const indent = '  '.repeat(depth);
  const bbox = node.absoluteBoundingBox;
  const size = bbox ? Math.round(bbox.width) + 'x' + Math.round(bbox.height) : '';
  let extra = '';
  if (node.characters) extra += " text='" + node.characters.replace(/\n/g, ' ') + "'";
  if (node.style) extra += ' font=' + node.style.fontFamily + ' weight=' + node.style.fontWeight + ' ' + node.style.fontSize + 'px lh=' + Math.round(node.style.lineHeightPx || 0) + 'px';
  if (node.fills && node.fills.length > 0 && node.fills[0].color) {
    const c = node.fills[0].color;
    const hex = '#' + [c.r, c.g, c.b].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
    extra += ' fill=' + hex;
  }
  if (node.strokes && node.strokes.length > 0 && node.strokes[0].color) {
    const c = node.strokes[0].color;
    const hex = '#' + [c.r, c.g, c.b].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
    extra += ' stroke=' + hex;
  }
  if (node.cornerRadius) extra += ' rounded=' + node.cornerRadius + 'px';
  if (node.itemSpacing) extra += ' gap=' + node.itemSpacing + 'px';
  if (node.paddingLeft !== undefined) extra += ' p=[' + node.paddingTop + ',' + node.paddingRight + ',' + node.paddingBottom + ',' + node.paddingLeft + ']';

  console.log(indent + '- [' + node.id + '] ' + node.name + ' (' + node.type + ') ' + size + extra);
  if (node.children) {
    node.children.forEach(c => inspectChildren(c, depth + 1));
  }
}

inspectChildren(doc);
