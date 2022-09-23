// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs       = require('fs');
const util    = require('util');
const { getEnabledCategories } = require('trace_events');
let licBadge   = '';

// TODO: Create an array of questions for user input
const questions = [
    'Username: ', 
    'Email address: ', 
    'Project name: ',
    'Project description: ',
    'Dependencies: ',
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
            name: 'siteLocation',
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
            message: questions[6],
            choices: ['APACHE', 'BSD', 'GPL', 'MIT', 'N/A'],
        
        },

    ])

}


function getLicense (res) {

    if (res.license == "MIT") {
        
        licBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    
    } 
    
    return licBadge;

}

function getReadme (res) {

    return `
    
    # ${res.projectName}

    ## Getting Started
    ${res.description}
    

    ### Dependencies
    ${res.dependencies}

    ### Executing the program
    ${res.siteLocation}

    ## Authors

    Contributors and contact information
    ${res.username}
    
    ## Version History
    ${res.version}
    
    ## License
    
    This project is licensedunder the MIT License - see the LICEWNSE.md file for details`

}

const writeFileAsync = util.promisify(fs.writeFile, '');

// TODO: Create a function to initialize app
async function init() {

    try {

        const res = await promptUser();

        getLicense(res);

        const rmFile = getReadme(res);
        console.log(rmFile);
        await writeFileAsync("./README.md", rmFile);

        console.log("README.md file created successfully");
        
    } catch(err) {

        console.log(err);

    }

}

// Function call to initialize app
init();