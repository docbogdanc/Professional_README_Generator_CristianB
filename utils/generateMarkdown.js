// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}  

  ## Description

  ${data.description}

  ## Table of Contents 

  - [Instalation](#installation)

  
  - [Usage](#usage)

  
  - [Credits](#credits)


  - [License](license)

  ## Instalation

  ## Usage

  ## Credits

  ## License

  ## Contributing

  ## Tests

  ## Questions

  

`
  

}

module.exports = generateMarkdown;
