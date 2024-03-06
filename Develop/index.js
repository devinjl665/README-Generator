// TODO: Include packages needed for this application

const fs = require('fs'); // File system module for file operations
const inquirer = require('inquirer'); // Inquirer for user prompts

const {
    renderLicenseBadge,
    renderLicenseSection,
} = require('./utils/generateMarkdown');
const { error } = require('console');

// TODO: Create an array of questions for user input
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
        type: 'type',
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
        name: 'credit',
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

//Function to create
function generateReadMe(answers) {
    const readMeContent = `
    # ${answers.title} ${renderLicenseBadge(answers.license)}
    
    ## Description
    
    ${answers.description}
    
    ## Directory
    
    1. [Installation] (#installation)
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

    ## Contact Me

    Github: (https://github.com/${answers.github})
    Email: ${answers.email}`;
    
    return readMeContent;
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Your README has been generated!')
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readMeTable = createReadMe(answers);
        writeToFile('README.md', readMeTable);
    });
}

// Function call to initialize app
init();
