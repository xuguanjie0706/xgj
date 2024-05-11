#!/usr/bin/env node
import { program } from  "commander"
import { $ } from  "zx"
import pkg from  "../package.json" assert { type: 'json' }
import {exec} from "child_process"

// const dayjs  = require("dayjs")

// import inquirer from "inquirer";

// console.log(program);
// let branch = await $`git branch --show-current`;
// console.log(`Current git branch is ${branch}`);

// 询问用户想要的版本
// const framework = await question("Choose a framework (react/vue/solidjs): ")
// const version = await question(
    // `Choose a version of ${framework} (v1/v2/v3): `
//   );
  
//   process.exit(1);

// console.log(dayjs);


program
    .name(pkg.name)
    .usage('<command> [option]')
    .version(pkg.version) // 设定版本
    .option('-f, --first', '第一个')
   
    
const create =  program.command('create <app-name>')
create.description("创建").action((name)=>{
    console.log(name,"name");
})

const  objCom  ={
    "gbs":'git branch --show-current',
    "grbi":"git rebase -i",
    'gck':"git checkout",
    'grset':"git reset",
    'grvt':"git revert"
}
let whiteCmd = ['g',...Object.keys(objCom)]

program.on('command:*', ([cmd,opts]) => {
    console.log(cmd);
    if(!whiteCmd.includes(cmd)){
        process.exit(1); // 停止执行
    }
})
program.parse(process.argv) // 解析所有参数

const options = program.opts(); // 获取所有可用的 opt 作为参数
// console.log(options,'options');
// console.log(program.args,'args');
const [command ,...opts]  = program.args

// console.log(command);
if(objCom[command]){
    console.log(objCom[command]);
     exec(`${objCom[command]} ${opts}`,(err,stdout)=>{
        if(err){
            console.log(err)
            process.exit(1); // 停止执行
        }
        console.log(stdout)
     })
}
