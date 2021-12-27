// Create README.md from answers collected in index.js via inquirer questions
// Formated Output for Markdown
function createReadMe(answers) {
  return `

# ${answers.projectName}  

## Table of Contents ![badge](https://img.shields.io/badge/license-${answers.licensing}-blue)

* [x] [Description](#description)

* [x] [Installation](#installation)

* [x] [Toolkit](#toolkit)

* [x] [Licensing](#licensing)

* [x] [Usage](#usage)

* [x] [Licensing](#tests)

* [x] [Contributing](#contributing)

* [x] [Questions](#questions)

### Description <a name="description"></a>

${answers.description} 

### Installation <a name="installation"></a>

Here's how you setup this project:<br/>

${answers.installation}  

### Toolkit <a name="toolkit"></a>

${answers.composition}  

### Licensing <a name="licensing"></a> 

This application is covered by the ${answers.licensing} license. 

### Usage <a name="usage"></a> 

${answers.usage} 

### Tests  <a name="tests"></a> 

${answers.tests} 

### Contributing <a name="contributing"></a> 

Resources and people who contributed include: ${answers.credits} 
<br/>

If you would like to contribute to the project further, please ${answers.contributing} 

### Questions <a name="questions"></a> 

Get in touch with me on Github: [${answers.username}](https://github.com/${answers.username})
<br/>

If you have any additional questions, please contact me at: ${answers.email}
`;
}

module.exports = createReadMe;
