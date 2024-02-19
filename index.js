const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What the title of the project',
      },

];

// function to write README file
function writeToFile(fileName, data) {
 
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        // Write the answers to a new file
        const data = `Title is : ${answers.title}\nFavorite Color: ${answers.title}`;
        fs.writeFile('file.txt', data, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Answers saved to file.txt');
            }
        });
    })
    .catch((err) => {
        console.error(err);
    });

}

// function call to initialize program
init();
