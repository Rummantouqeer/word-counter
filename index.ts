import inquirer from "inquirer";

const answers:{
    sentence:string;
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence to count the word",
    }


])

const wordcount = answers.sentence.split(" ")
console.log(wordcount)
console.log(`Your sentence word count is ${wordcount.length}`);
