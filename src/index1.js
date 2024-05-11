#!/usr/bin/env node

const program  = require("commander")
const $ = require("zx").$
const pkg   = require("../package.json")

// const dayjs  = require("dayjs")

// import inquirer from "inquirer";

// console.log(program);
async  (async ()=>{
    let branch = await $`git branch --show-current`;
    console.log(`Current git branch is ${branch}`);
})


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
  .option('-f, --first', '第一个');

const create = program.command('create <app-name>');
create.description('创建').action((name) => {
  console.log(name, 'name');
});

const objCom = {
  gbs: 'git branch --show',
};
let whiteCmd = ['g', ...Object.keys(objCom)];

program.on('command:*', ([cmd, opts]) => {
  if (!whiteCmd.includes(cmd)) {
    throw new Error('不合法命令');
  }
});
program.parse(process.argv); // 解析所有参数

const options = program.opts(); // 获取所有可用的 opt 作为参数
console.log(options, 'options');
console.log(program.args, 'args');
const [command, ...opts] = program.args;

console.log(command);
if (objCom[command]) {
  // const [cmd ,...os] = opts
  // console.log(cmd,os?.join(" "),2);
  // const str = (os||[]).join(" ");
  // const data =  await $`git ${cmd} ${str} `;
  console.log(objCom[command]);
//   const data = await $`${objCom[command]} `;
//   console.log(`${data}`);
}
