// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
// const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    'What is your name?',
    'What is your Github username?',
    'What is your email address?',
    'What is the name of your project?',
    'Please provide a short description of your project:',
    'What kind of license should your project have?',
    'Please provide a link to your project repo:',
    'Please enter any installation instructions:',
    'Please enter any usage information:',
    'Please enter any contributing information:',
    'Please enter any testing instructions:'
];

const licenseArray = [
    'Shield',
    'MIT',
    'none'
]; 

var fileContent;

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
        // {
        //     name: 'title',
        //     type: 'input',
        //     message: questions[11],
        // },
    ])

.then((data) => {
    fileContent = generateMarkdown(data);
    writeToFile('README.md', fileContent)
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(path);
    // return fs.writeFile(path.join(process.cwd()))

    return fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README Generated!'));
    // fs.writeFile('README.md', fileContent, (err) =>
    //     err ? console.log(err) : console.log('README Generated!'));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
