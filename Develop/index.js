// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs       = require('fs');
const util     = require('util');
let licBadge   = '';

// TODO: Create an array of questions for user input
const questions = [
    'Username: ', 
    'Email address: ', 
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


function getLicense (res) {

    if (res.license == "APACHE") {
        
        licBadge = "[![License: APACHE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0";
    
    } 

    if (res.license == "BSD") {
        
        licBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    
    }

    if (res.license == "GPL") {
        
        licBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
    
    }
    
    if (res.license == "MIT") {
        
        licBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    
    }
    
    return licBadge;

}

function getReadme (res) {

    return `
    
    # ${res.projectName}
    # ${licBadge}

    ## Description
    ${res.description}

    ## Table of contents
    *[Dependencies](#dependencies)
    *[Execution](#installation)
    *[Contributors](#contributors)
    *[Version](#version)
    *[License](#license)

    ### Dependencies
    ${res.dependencies}

    ### Executing the program
    ${res.execution}

    ## Contributors
    ${res.username} ${res.email}
    
    ## Version
    ${res.version}
    
    ## License
    This project is licensed under the ${res.license} license.`

}

const writeFileAsync = util.promisify(fs.writeFile, '');

// TODO: Create a function to initialize app
async function init() {

    try {

        const res = await promptUser();

        getLicense(res);

        const rmFile = getReadme(res);
        console.log(rmFile);
        await writeFileAsync("../README.md", rmFile);

        console.log("README.md file created successfully");
        
    } catch(err) {

        console.log(err);

    }

}

// Function call to initialize app
init();