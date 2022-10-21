let licBadge   = '';

function generateMarkdown(res) {

    return `
    
# ${res.projectName}
# ${getLicense(res)}

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
This project is licensed under the ${res.license} license.

    `

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

module.exports = generateMarkdown;