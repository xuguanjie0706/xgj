#!/usr/bin/env node

let branch = await $`git branch --show-current`;
console.log(`Current git branch is ${branch}`);
