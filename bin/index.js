#! /usr/bin/env node
import PromptSync from "prompt-sync";
let p = PromptSync();
let n = Math.trunc(Math.random() * 10);
for (let i = 0; i <= 10; i++) {
    let j = p("enter number:");
    console.log(j);
    let k = parseInt(j);
    if (n == k) {
        console.log(` your number is:${k}\n`, `random number is:${n}\n`, `Your guess is right.\n`);
        break;
    }
    else {
        console.log(` your number is:${k}\n`, `Your guess is wrong.\n`);
    }
}
