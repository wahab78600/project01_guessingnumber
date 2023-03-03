import inquirer from "inquirer"

import PromptSync from "prompt-sync"

let p =　PromptSync()
let n:number=Math.trunc(Math.random()*10)
for (let i:number=0; i<=10; i++){
let j =p("enter number:")
console.log(j)

let k:number=parseInt(j)



if(n==k){
    console.log(` your number is:${k}\n`,`random number is:${n}\n`,`Your guess is right.\n`)
    break;
}
else {
    console.log(` your number is:${k}\n`,`Your guess is wrong.\n`)

}
}
