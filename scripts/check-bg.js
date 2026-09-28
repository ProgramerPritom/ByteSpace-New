const fs = require('fs');
const token = fs.readFileSync('.env', 'utf-8').match(/FIGMA_TOKEN=(.*)/)[1].trim();

async function checkBackground() {
  const res = await fetch('https://api.figma.com/v1/files/ekINKs7aTmnhWwjKSNZxwF/nodes?ids=1:1067,1:1695', {
    headers: { 'X-Figma-Token': token }
  });
  const data = await res.json();
  const home = data.nodes['1:1067'].document;
  const hero = data.nodes['1:1695'].document;

  console.log('Home fills:', home.fills, 'backgroundColor:', home.backgroundColor);
  console.log('Hero fills:', hero.fills, 'backgroundColor:', hero.backgroundColor);
}
checkBackground();
