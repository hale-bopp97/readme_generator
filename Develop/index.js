// TODO: Include packages needed for this application
const inquirer         = require('inquirer');
const fs               = require('fs');
const util             = require('util');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'Username: ', 
    'GitHub: ', 
    'Project name: ',
    'Project description: ',
    'Dependencies: ',
    'Execution: ',
    'Version',
    'License: '
];

function promptUser() {
     
    return inquirer.prompt([

        {

            type: 'input',
            name: 'username',
            message: questions[0]

        },

        {

            type: 'input',
            name: 'email',
            message: questions[1]

        },

        {

            type: 'input',
            name: 'projectName',
            message: questions[2]

        },

        {

            type: 'input',
            name: 'description',
            message: questions[3]

        },

        {

            type: 'input',
            name: 'dependencies',
            message: questions[4]

        },

        {
            type: 'input',
            name: 'execution',
            message: questions[5]
        },

        {

            type: 'input',
            name: 'version',
            message: questions[6]

        },

        {

            type: 'list',
            name: 'license',
            message: questions[7],
            choices: ['APACHE', 'BSD', 'GPL', 'MIT', 'N/A'],
        
        },

    ])

}

const writeFileAsync = util.promisify(fs.writeFile, '');

// TODO: Create a function to initialize app
async function init() {

    try {

        const res = await promptUser();

        await writeFileAsync("../README.md", generateMarkdown({...res}));

        console.log("README.md file created successfully");
        
    } catch(err) {

        console.log(err);

    }

}

// Function call to initialize app
init();