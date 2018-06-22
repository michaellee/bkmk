#!/usr/bin/env node

const program = require('commander')

const questions = require('./utilities/questions')

const version = '0.1.0'

program
  .version(version)
  .option('-n, --new', 'Add new bookmark')
  .parse(process.argv)

if (program.new) {
  questions.newBookmark().then((bookmark) => {
    console.log(bookmark)
  })
}
