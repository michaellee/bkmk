#!/usr/bin/env node

const program = require('commander')

const questions = require('./utilities/questions')
const file = require('./utilities/file')
const bookmarks = require('./utilities/bookmarks')
const testFile = `./test.txt`

const version = '0.1.0'

program
  .version(version)
  .option('-n, --new', 'Add new bookmark')
  .option('-l, --list', 'List all bookmarks')
  .parse(process.argv)

if (program.new) {
  questions.newBookmark().then((bookmark) => {
    file.write(testFile, bookmark, () => {
      console.log(`Bookmark for "${bookmark.title}" was added.`)
    })
  })
}

if (program.list) {
  file.read(testFile, (allBookmarks) => {
    bookmarks.list(allBookmarks, (data) => {
      console.log(data)
    })
  })
}
