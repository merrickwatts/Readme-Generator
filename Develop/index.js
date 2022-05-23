// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does your project do? (What is a description of your project)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do users install this project?'
    },
    {
        type: 'input',
        name: 'solution',
        message: 'What problem does this project aim to solve?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What tests have been performed on this project?'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'What are you still working on for this project?'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Who are the other contributors to this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the license used for this project: ',
        choices: ['apache', 'mit', 'gnu']
    },
    {
        type: 'input',
        name: 'GHuser',
        message: 'What is your Github Username?'
    },
    {
        type: 'input',
        name: 'emailaddy',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Your new read me file is ready!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("README.md", generateMarkdown(data));
        });
}

// Function call to initialize app
init();
