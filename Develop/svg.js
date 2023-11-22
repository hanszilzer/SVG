function createLogo({ text, textColor, shape, shapeColor }) {

    let svgContent = '';
  
    switch (shape) {
      case 'circle':
        svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
                        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
                      </svg>`;
        break;
  
      case 'triangle':
        svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="150,50 100,150 200,150" fill="${shapeColor}" />
                        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
                      </svg>`;
        break;
  
      case 'square':
        svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="${shapeColor}" />
                        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
                      </svg>`;
        break;
  
      default:
        break;
    }
  
    return svgContent;
  }
  
  module.exports = createLogo;