
// Declaration of all const
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const createReadMe = require("./js/createReadMe")
const writeAsync = util.promisify(fs.writeFile);

// Series of Questions
function askUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
            default: 'Project Name',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            default: 'GitHub Username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            default: 'myname@domain.com',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the rules for using this project code, materials, etc.?',
            default: 'Fair Use and Noncommercial Purpose',
        },

        {
            type: 'input',
            name: 'tests',
            message: 'What kind of testing was completed?',
            default: 'The a, b, and c were tested.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'How would you describe this project?',
        },
        {   // select from list
            type: 'list',
            name: 'licensing',
            message: 'What License is this used with?',
            choices: [
                'Apache',
                'Artistic',
                'CC',
                'Educational',
                'MIT',
                'Mozilla',
                'Open',
                'Other']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How should people contribute to your project?',
            default: 'Contact via Github or email with details.',
        },
        {   // check multiple options
            type: 'checkbox',
            name: 'composition',
            message: 'What language(s) used to create your project?',
            choices: [
                'C', 'C#', 'CSS', 'HTML', 'JavaScript', 'Python', 'React', 'Ruby', 'TypeScript', 'Other'
            ],
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide instructions to get started with your project.',
            default: 'Installation Guideline'
        },

        {
            type: 'input',
            name: 'credits',
            message: 'Credentials in this project?',
        }
    ]);
}
async function init() {
    try {
        const answers = await askUser();
        const buildContent = createReadMe(answers);
        writeAsync('./written/README.md', buildContent);
        // overwrites previous version - no new document
        console.log('README.md has been successfully created in the written folder.');
    } catch (err) {
        console.log(err);
    }
}

init();
