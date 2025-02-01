import https from "https";
import chalk from "chalk";

const RandomJoke =()=>{
    const url ='https://official-joke-api.appspot.com/random_joke';

    https.get(url ,(response)=>{
        let data ="";
     response.on("data",(smallData)=>{
        data+=smallData;
     })
     response.on("end",()=>{
        const joke =JSON.parse(data);
        console.log(`Here is your random joke , type ${joke.type}`)
        console.log(chalk.red (`${joke.setup}`))
        console.log(chalk.blue(`${joke.punchline}`))
     })
     response.on("error",(err)=>{
        console.log(`${err.message}`)
     })
    })

}



RandomJoke()