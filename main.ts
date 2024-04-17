#! /usr/bin/env node
//for file exicution
//SHABANG 

import inquirer from "inquirer";
import chalk from "chalk";
const currency : any={
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    WON: 1383.95,   //korean won

};

let user_Ans = await inquirer.prompt(
    [
       {
          name: "fromcurrency",
          message: chalk.blueBright("Enter From Currency: "),
          type: "list",
          choices: ["USD","EUR","GBP","INR","PKR","WON"]
       },

       {
        name: "Tocurrency",
        message: chalk.yellowBright("Enter to Currency: "),
        type: "list",
        choices: ["USD","EUR","GBP","INR","PKR","WON"]
       },

       {
        name:"Amount",
        type:"number",
        message:chalk.blueBright("Enter Your Amount: ")
       }
    ]

)

let fromAmount= currency[user_Ans.fromcurrency]  //exchange rate
let toAmount = currency[user_Ans.Tocurrency]   //exchange rate
let Amount = user_Ans.Amount
let baseAmount = Amount / fromAmount // usd base amount 
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
