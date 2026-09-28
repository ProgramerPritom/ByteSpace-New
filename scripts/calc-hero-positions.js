const heroOriginX = -8870;
const heroOriginY = 1748;

const elements = [
  { name: 'Header_Frame', x: -8870, y: 1748, w: 1440, h: 120 },
  { name: 'Hero (Heading + Search)', x: -8750, y: 1917, w: 1200, h: 345 },
  { name: 'Ellipse 7 (Lime Circle)', x: -8724, y: 2330, w: 1149, h: 1149 },
  { name: 'Student Image', x: -8439, y: 2260, w: 578, h: 541 },
  { name: 'UI/UX Design Card', x: -8534, y: 2387, w: 208, h: 70 },
  { name: 'Learning Progress Card', x: -7987, y: 2399, w: 232, h: 131 },
  { name: 'Happy Students Card', x: -8611, y: 2585, w: 258, h: 121 },
  { name: '3D Ornaments', x: -9010, y: 1969, w: 1719, h: 803 },
];

console.log('--- EXACT FIGMA PIXEL POSITIONING (Frame 1440x1024) ---');
elements.forEach(el => {
  const relX = el.x - heroOriginX;
  const relY = el.y - heroOriginY;
  console.log(`${el.name}:`);
  console.log(`  left: ${relX}px, top: ${relY}px, width: ${el.w}px, height: ${el.h}px`);
});
