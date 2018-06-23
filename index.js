#!/usr/bin/env node

const program = require('commander')

const prompts = require('./utilities/prompts')
const file = require('./utilities/file')
const bookmarks = require('./utilities/bookmarks')
const testFile = `./test.txt`

const version = '0.1.0'

program
  .version(version)
  .option('-n, --new', 'Add new bookmark')
  .option('-l, --list', 'List all bookmarks')
  .option('-u, --update', 'Update a bookmark')
  .parse(process.argv)

if (program.new) {
  prompts.newBookmark().then((bookmark) => {
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

if (program.update) {
  file.read(testFile, (allBookmarks) => {
    bookmarks.list(allBookmarks, (data) => {
      prompts.listBookmarks(data).then((bookmark) => {
        console.log(bookmark)
      })
    })
  })
}
