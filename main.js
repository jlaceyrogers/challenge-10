const fs = require('fs');
const prompt = require('prompt-sync')();

function createLogo() {
  const text = prompt('Enter up to three characters for the text: ');
  const textColor = prompt('Enter the text color (color keyword or hexadecimal number): ');
  const shape = prompt('Choose a shape (circle, triangle, or square): ');
  const shapeColor = prompt('Enter the shape color (color keyword or hexadecimal number): ');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
    <rect x="0" y="0" width="300" height="200" fill="${shapeColor}" />
    <text x="150" y="120" text-anchor="middle" fill="${textColor}" font-size="60">${text}</text>
  </svg>`;

  fs.writeFileSync('logo.svg', svg);
  console.log('Generated logo.svg');
}

createLogo();
