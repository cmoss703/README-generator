// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license != 'none') {
  
  return  `![License Badge](https://img.shields.io/badge/license-${license}-green)`

  } else {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license != 'none') {
  
    return  `* [License](#license)`
  
    } else {
      return ''
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


  if (license != 'none') {
  
    return  `#### License

    This Project is licensed for use by ${license}.`
  
    } else {
      return ''
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  
# ${data.title}

## TABLE OF CONTENTS

* [Description](#description)
* [Installaion](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Credits](#credits)
${renderLicenseLink(data.license)}

## DESCRIPTION

${data.description}

## INSTALLATION

### USAGE

### TESTING

#### CREDITS

This project was created by ${data.name}.

Email: ${data.email}

Github Repo: ${data.github}

Link to Deployed Site: [${data.title}](${data.url})

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
