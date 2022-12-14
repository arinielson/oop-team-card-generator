const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/utils/generateHTML.js');
const Manager = require('./src/lib/manager.js');
const Engineer = require('./src/lib/engineer.js');
const Intern = require('./src/lib/intern.js');

const employees = [];

let isTeamComplete = false;

const validateInput = (userInput) => {
    if (userInput === '') {
        return 'please type your answer before proceeding';
    } else {
        return true;
    }
};

const init = async () => {
    await createManager();

    while (!isTeamComplete) {
        const employeeTypeQuestion = [
            {
                type: 'list',
                message: 'Please select the employee type:',
                name: 'employeeType',
                choices: [
                    {name: 'Engineer', value: 'engineer', short: 'Engineer'},
                    {name: 'Intern', value: 'intern', short: 'Intern'},
                    {name: 'None', value: 'none', short: 'None'},
                ],
            },
        ];

        const {employeeType} = await inquirer.prompt(employeeTypeQuestion);

        if (employeeType === 'none') {
            isTeamComplete = true;
        } else {
            if (employeeType === 'engineer') {
                await createEngineer();
            }
            if (employeeType === 'intern') {
                await createIntern();
            }
        }
    }

    const HTML = generateHTML(employees);
    fs.writeFileSync('team-profile.html', HTML, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('HTML created');
        }
    });
};

const createManager = async () => {
    const managerQuestions = [
        {
            type: 'input',
            message: 'Enter manager name:',
            name: 'name',
            validate: validateInput,
        },
        {
            type: 'input',
            message: 'Enter employee ID:',
            name: 'id',
            validate: validateInput,
        },
        {
            type: 'input',
            message: 'Enter office number:',
            name: 'officeNumber',
            validate: validateInput,
        },
        {
            type: 'input',
            message: 'Enter work email:',
            name: 'email',
            validate: validateInput,
        },
    ];

    const managerAnswers = await inquirer.prompt(managerQuestions);

    const manager = new Manager(managerAnswers);

    employees.push(manager);
};

const createEngineer = async() => {
    const engineerQuestions = [
        {
            type: 'input',
            message: 'Enter engineer name:',
            name: 'name',
            validate: validateInput,
        },
        {
            type: 'input',
            message: 'Enter engineer ID:',
            name: 'id',
            validate: validateInput,
        },
        {
            type: 'input',
            message: 'Enter engineer email:',
            name: 'email',
            validate: validateInput,
        },
        {
            type: 'input',
            message: 'Enter engineer github profile:',
            name: 'github',
            validate: validateInput,
        },
    ];

    const engineerAnswers = await inquirer.prompt(engineerQuestions);

    const engineer = new Engineer(engineerAnswers);

    employees.push(engineer);
};

const createIntern = async() => {
    const internQuestions = [
        {
            type: 'input',
            message: 'Enter intern name:',
            name: 'name',
            validate: validateInput,
        },
        {
            type: 'input',
            message: 'Enter intern ID:',
            name: 'id',
            validate: validateInput,
        },
        {
            type: 'input',
            message: 'Enter intern email:',
            name: 'email',
            validate: validateInput,
        },
        {
            type: 'input',
            message: 'Enter intern school name:',
            name: 'school',
            validate: validateInput,
        },
    ];

    const internAnswers = await inquirer.prompt(internQuestions);

    const intern = new Intern(internAnswers);

    employees.push(intern);
};

init();