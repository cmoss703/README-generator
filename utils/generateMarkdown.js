// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license != 'none') {
  
  return  `![License Badge](https://img.shields.io/badge/license-${license}-green)`

  } else {
    return ''
  }

}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license != 'none') {
  
    return  `* [License](#license)`
  
    } else {
      return ''
    }

}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


  if (license != 'none') {
  
    return  `#### License
    
    This Project is licensed for use by ${license}.`
  
    } else {
      return ''
    }
}

// A function to generate markdown for README using data from index file.
// The License badge, section, and link are returned only if there is data in them. If not, they are not shown.
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  
# ${data.title}

## TABLE OF CONTENTS

* [Description](#description)
* [Installaion](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Testing](#testing)
* [Credits](#credits)
${renderLicenseLink(data.license)}

## DESCRIPTION

${data.description}

## INSTALLATION

${data.install}

### USAGE

${data.usage}

## CONTRIBUTE

${data.contribute}

### TESTING

${data.testing}

### CREDITS

This project was created by [${data.name}](https://github.com/${data.github}).

Email: ${data.email}

Github Repo: ${data.repo}

Link to Deployed Site: [${data.title}](${data.url})

${renderLicenseSection(data.license)}
`;
}

// Exporting this information to the index.js file
module.exports = generateMarkdown;
