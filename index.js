#!/usr/bin/env node

const program = require('commander')
const version = '0.1.0'

program
  .version(version)
  .option('-n, --new', 'Add new bookmark')
  .parse(process.argv)

if (program.new) {
  console.log("What's the URL for the book")
}
