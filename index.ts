import * as inquirer from "inquirer";
import chalk from "chalk";
//calculater operators
enum operator
{
    Addition = "Addition",
    SUBTRACT ="Subtraction",
    MULTIPLY ="Multiplication",
    DIVIDE ="Division",
}
const prompt = inquirer.createPromptModule();
function validateNumber(input:string):boolean | string 
{ 
    if(isNaN(parseFloat(input)))
    {
        return "please enter a valid number"
    }
    return true;
}
async function main(){
    const input = await prompt([
        {
        type : "input",
        name :"num1",
        message: "Please enter the first number:",
        validate: validateNumber,
    },
    {
        type:"input",
        name:"operator",
        message:"select an operation :",
        choices:Object.values(operator),
    },
    {
    type : "input",
    name :"num2",
    message: "Please enter the second number:",
    validate: validateNumber,
},


    
    
])
const num1 = parseFloat(input.num1);
const num2  = parseFloat(input.num2);
const selectedOperator = input.operator as operator;
let result:number;
if(selectedOperator===operator.Addition){
    result=num1+num2;
    console.log(chalk .bgBlue.greenBright(`result is :${result}`));
    }else if( selectedOperator===operator.DIVIDE){
        result=num1 / num2;
        console.log(chalk.red.bgBlue(`Result is: ${result}`));
        
    }else if( selectedOperator===operator.SUBTRACT){
        result=num1 - num2;
        console.log(chalk.yellow.bgBlue(`Result is: ${result}`));
    }else if ( selectedOperator===operator.MULTIPLY){
        result=num1 * num2;
        console.log(chalk.gray.bgBlue(` Result is : ${result}`));
        
    }
        
}
main();

