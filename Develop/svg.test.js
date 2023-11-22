const createLogo = require('./svg');

// Create a test suite for createLogo
describe('createLogo', () => {
  // Create a test to check that createLogo generates the correct SVG for a circle
  describe('circle', () => {
    it('should generate a circle SVG with the specified text, text color, and shape color', () => {
      // Set the input parameters for the circle
      const text = 'ABC';
      const textColor = 'black';
      const shapeColor = 'white';

      // Call the createLogo function with the circle parameters
      const svgContent = createLogo({ text, textColor, shape: 'circle', shapeColor });

      // Check that the generated SVG content contains the expected circle elements
      expect(svgContent).toContain('<circle cx="150" cy="100" r="50" fill="white" />');
      expect(svgContent).toContain(`<text x="50%" y="50%" fill="black" text-anchor="middle" dominant-baseline="middle">${text}</text>`);
    });
  });

  // Create a test to check that createLogo generates the correct SVG for a triangle
  describe('triangle', () => {
    it('should generate a triangle SVG with the specified text, text color, and shape color', () => {
      // Set the input parameters for the triangle
      const text = 'ABC';
      const textColor = 'black';
      const shapeColor = 'white';

      // Call the createLogo function with the triangle parameters
      const svgContent = createLogo({ text, textColor, shape: 'triangle', shapeColor });

      // Check that the generated SVG content contains the expected triangle elements
      expect(svgContent).toContain('<polygon points="150,50 100,150 200,150" fill="white" />');
      expect(svgContent).toContain(`<text x="50%" y="50%" fill="black" text-anchor="middle" dominant-baseline="middle">${text}</text>`);
    });
  });

  // Create a test to check that createLogo generates the correct SVG for a square
  describe('square', () => {
    it('should generate a square SVG with the specified text, text color, and shape color', () => {
      // Set the input parameters for the square
      const text = 'ABC';
      const textColor = 'black';
      const shapeColor = 'white';

      // Call the createLogo function with the square parameters
      const svgContent = createLogo({ text, textColor, shape: 'square', shapeColor });

      // Check that the generated SVG content contains the expected square elements
      expect(svgContent).toContain('<rect width="100%" height="100%" fill="white" />');
      expect(svgContent).toContain(`<text x="50%" y="50%" fill="black" text-anchor="middle" dominant-baseline="middle">${text}</text>`);
    });
  });
});