// Packages needed for this application:
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// Array of questions for input
const questions = [
    'What is your name?',
    'What is your Github username?',
    'What is your email address?',
    'What is the name of your project?',
    'Please provide a short description of your project:',
    'What kind of license does your project have?',
    'Please provide a link to your project repo:',
    'Please enter any installation instructions:',
    'Please enter any usage information:',
    'Please enter any contributing information:',
    'Please enter any testing instructions:',
    'Please enter the link to your deployed app or website, if applicable.'
];

// Array of available licenses
const licenseArray = [
    'Shield',
    'MIT',
    'Apache-2.0',
    'BSD-2-Clause',
    'BSD-3-Clause',
    'CC',
    'UniLicense',
    'none'
];

// Data to be written into file as an empty string for now, to be re-assigned later.
var fileContent;

// Prompt for questions, including name, type of input, and choices, if applicable.
inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: questions[0],
        },
        {
            name: 'github',
            type: 'input',
            message: questions[1],
        },
        {
            name: 'email',
            type: 'input',
            message: questions[2],
        },
        {
            name: 'title',
            type: 'input',
            message: questions[3],
        },
        {
            name: 'description',
            type: 'input',
            message: questions[4],
        },
        {
            name: 'license',
            type: 'list',
            message: questions[5],
            choices: licenseArray,
            default: 'none'
        },
        {
            name: 'repo',
            type: 'input',
            message: questions[6],
        },
        {
            name: 'install',
            type: 'input',
            message: questions[7],
        },
        {
            name: 'usage',
            type: 'input',
            message: questions[8],
        },
        {
            name: 'contribute',
            type: 'input',
            message: questions[9],
        },
        {
            name: 'testing',
            type: 'input',
            message: questions[10],
        },
        {
            name: 'url',
            type: 'input',
            message: questions[11],
        },
    ])

    // The answers to these questions are returned as data and sent to the generateMarkdown file for use in creating the new file.
    .then((data) => {
        fileContent = generateMarkdown(data);
        writeToFile('README.md', fileContent)
    });

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README Generated!'));

}

// Function to initialize app
function init() { }

// Function call to initialize app
init();
