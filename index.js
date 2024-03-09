// Packages needed for this application
const fs = require('fs'); // File system module for file operations
const inquirer = require('inquirer'); // Inquirer for user prompts

// Import functions from the generateMarkdown module
const { renderLicenseBadge, renderLicenseSection } = require('./utils/generateMarkdown');
const { error } = require('console');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the name of your project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions of this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project.',
        choices: [
            { name: 'MIT', value: 'MIT'},
            { name: 'GNU', value: 'GNU'},
            { name: 'None', value: 'None'},
        ],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What resources were used to create this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
];

// Function to generate README content based on user answers
function generateReadMe(answers) {
    const readMeContent = `
# ${answers.title} ${renderLicenseBadge(answers.license)}
    
## Description
    
${answers.description}
    
## Directory
    
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributions](#contributions)
5. [Tests](#tests)
6. [Questions](#questions)
    
## Installation 

${answers.installation}

## Usage

${answers.usage}

## License

${renderLicenseSection(answers.license)}

## Contributions

${answers.contributions}

## Tests

${answers.test}

## Questions

Github:[https://github.com/${answers.github}](https://github.com/${answers.github})
Email: ${answers.email}`;
    
    return readMeContent.trim(); // Trim leading spaces
} 

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('Error. README cannot be generated:', error.message);
        } else {
            console.log('Your README has been generated!')
        }
    });
}

// A function to initialize the application
function init() {
    // Prompt the user with questions
    inquirer.prompt(questions).then((answers) => {
        // Generate README content based on user answers
        const readMeTable = generateReadMe(answers);
        // Write the generated README content to a file
        writeToFile('./examples/README.md', readMeTable);
    });
}

// Function call to initialize the application
init();

