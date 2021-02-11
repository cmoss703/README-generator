// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(answers.license)}
  
# ${data.title}

## TABLE OF CONTENTS

* [Description](#description)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## DESCRIPTION

${data.description}

## 
`;
}

module.exports = generateMarkdown;
