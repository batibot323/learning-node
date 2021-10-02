#!/usr/bin/env node

const inquirer = require('inquirer');

var questions = [
    {
        type: 'input',
        name: 'age',
        message: 'How old are you?'
    },
    {
        type: 'input',
        name: 'favoriteAnimal',
        message: `What's your favorite animal?`
    }
];

inquirer.prompt(questions).then(answers => {
    console.log(`You're ${answers['age']} years old.`);
    console.log(`I also love ${answers['favoriteAnimal']}!`);
})