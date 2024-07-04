#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgBlueBright("\n\t==== Welcome to Quiz ====\n"));
console.log(chalk.bold.magentaBright("\t Total Marks = 60, \n Each Question Carry Equal Marks.\n"));
let marks = 0;
let user_input = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: chalk.bold.blueBright("1. Which is the Capital of Pakistan?"),
        choices: ["Karachi", "Lahore", "Islamabad", "Queeta"]
    },
    {
        name: "question2",
        type: "list",
        message: chalk.bold.blueBright("2. How many times name 'Ahmed' came in Quran?"),
        choices: [1, 2, 10, 3]
    },
    {
        name: "question3",
        type: "list",
        message: chalk.bold.blueBright("3. How many Surah are there in Holy Quran?"),
        choices: [66, 140, 114, 110]
    },
    {
        name: "question4",
        type: "list",
        message: chalk.bold.blueBright("4. How many days are there in leap year?"),
        choices: [365, 355, 366, 377]
    },
    {
        name: "question5",
        type: "list",
        message: chalk.bold.blueBright("5. Which is the National game of Pakistan?"),
        choices: ["Cricket", "Tennis", "Hockey", "Foot Ball"]
    },
    {
        name: "question6",
        type: "list",
        message: chalk.bold.blueBright("6. Which is the Highest Mountain of Pakistan?"),
        choices: ["Tirich Mir", "Mount Everest", "Nanga Parbat", "K2"]
    }
]);
const { question1, question2, question3, question4, question5, question6 } = user_input;
// let correctOptions = chalk.bold.green([ " Islamabad", " 1" , " 114" , " 366" , " Hockey", " K2." ]);
let correctOptions = chalk.bold.green([" Islamabad , 1 , 114 , 366 , Hockey , K2."]);
if (question1 === "Islamabad")
    marks += 10;
if (question2 === 1)
    marks += 10;
if (question3 === 114)
    marks += 10;
if (question4 === 366)
    marks += 10;
if (question5 === "Hockey")
    marks += 10;
if (question6 === "K2")
    marks += 10;
console.log(chalk.bold.yellow(marks));
function myAnswers() {
    console.log(`\n Correct Options:`, chalk.bold.greenBright(correctOptions));
    if (marks == 60) {
        console.log(chalk.bold.bgMagenta(`\n\t //*// Congratulation! You have got full ${chalk.bold.underline.bgGreenBright(marks)} Marks, Out of 60 //*//\t`));
        console.log(chalk.bold.italic.blueBright("\t\t\t **** Keep it Up **** "));
    }
    else if (marks > 0) {
        console.log(chalk.bold.yellow(`\n\t You Got ${chalk.bold.underline.cyan(marks)} Marks, Out of 60.`));
        console.log(chalk.bold.italic.red("\t **** Better Luck Next Time ****"));
    }
    else {
        console.log(chalk.bold.grey(`\n\t Unfortunately! You Got ${chalk.bold.underline.red(marks)} Marks, Out of 60.`));
        console.log(chalk.bold.italic.red("\t\t **** You Need Work Hard ****"));
    }
}
myAnswers();
