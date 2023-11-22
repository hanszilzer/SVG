const fs = require('fs');
const inquirer = require('inquirer');
const createLogo = require('./Develop/svg'); 

const questions = [
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hex):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hex):',
      },
    ];

    function generateLogo() {
        inquirer.prompt(questions)
          .then(answers => {
            const svgContent = createLogo(answers);
      
            fs.writeFile('logo.svg', svgContent, (error) => {
              if (error) {
                console.error('Error:', error.message);
              } else {
                console.log('Generated logo.svg');
              }
            });
          });
      }
      
      generateLogo();