const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of the project ?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please Describe your project : ',
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'Please give information regarding the Instalation : ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please give information about Usage : ',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['none', 'MIT License', 'Apache License 2.0'],
        message: 'Please select the License : ',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please give information about Contributing : ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please give information about Tests : ',
    },
    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'Please write your GitHub username : ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please write your email address : ',
    },
    

];

// function to write README file
function writeToFile(fileName, info) {
    fs.writeFile(fileName, info, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Answers saved to file.txt');
        }
    });

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        // function call to write file.txt with text generated by module 
        writeToFile ("test.md", generateMarkdown(answers));
    })

}

// function call to initialize program
init();

