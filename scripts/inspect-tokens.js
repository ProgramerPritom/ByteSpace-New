const fs = require('fs');

const env = fs.readFileSync('.env', 'utf-8');
const token = env.match(/FIGMA_TOKEN=(.*)/)[1].trim();
const fileKey = 'ekINKs7aTmnhWwjKSNZxwF';

async function inspectTokens() {
  const res = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=73:753,73:1014,73:1039`, {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  
  function extractTextsAndColors(node, results = { colors: [], fonts: [] }) {
    if (node.fills) {
      for (const fill of node.fills) {
        if (fill.type === 'SOLID' && fill.color) {
          const r = Math.round(fill.color.r * 255);
          const g = Math.round(fill.color.g * 255);
          const b = Math.round(fill.color.b * 255);
          const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
          results.colors.push({ name: node.name, hex, r, g, b, opacity: fill.opacity ?? 1 });
        }
      }
    }
    if (node.style && node.style.fontFamily) {
      results.fonts.push({
        name: node.name,
        fontFamily: node.style.fontFamily,
        fontSize: node.style.fontSize,
        fontWeight: node.style.fontWeight,
        lineHeightPx: node.style.lineHeightPx,
        characters: node.characters
      });
    }
    if (node.children) {
      for (const c of node.children) {
        extractTextsAndColors(c, results);
      }
    }
    return results;
  }

  const tokens = extractTextsAndColors(data.nodes['73:753'].document);
  extractTextsAndColors(data.nodes['73:1014'].document, tokens);
  extractTextsAndColors(data.nodes['73:1039'].document, tokens);

  console.log('Sample Colors:');
  const uniqueColors = [...new Map(tokens.colors.map(c => [c.hex, c])).values()];
  console.log(uniqueColors.slice(0, 20));

  console.log('\nFonts used:');
  const uniqueFonts = [...new Set(tokens.fonts.map(f => `${f.fontFamily} (weight: ${f.fontWeight})`))];
  console.log(uniqueFonts);
}

inspectTokens().catch(console.error);
