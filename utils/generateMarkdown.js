// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}  ![Badge Icon](https://img.shields.io/badge/License-${data.license}-green)

  ## Description

  ${data.description}

  ## Table of Contents 

  - [Instalation](#instalation)

  
  - [Usage](#usage)

  
  - [Contributing](#contributing)


  - [License](#license)

  ## Instalation
  ${data.instalation}  

  ## Usage
  ${data.usage}  

  ## License
  ${data.license}  

  ## Contributing
  ${data.contributing}  

  ## Tests
  ${data.tests}  

  ## Questions
  For any questions please contact me at :  
  - gitHub : https://github.com/${data.gitHubUsername} 
  - email: ${data.email}  

  

`
  

}

module.exports = generateMarkdown;
