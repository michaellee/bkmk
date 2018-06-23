const inquirer = require('inquirer')

function newBookmark() {
  const questions = [
    {
      name: 'title',
      type: 'input',
      message: "What's the title of your book?",
      validate: (value) => {
        if (value.length) {
          return true
        } else {
          return "Please enter the title of the book you're bookmarking."
        }
      }
    },
    {
      name: 'pageOrUrl',
      type: 'input',
      message: "What's the page or url of the book where you last left off?",
      validate: (value) => {
        if (value.length) {
          return true
        } else {
          return 'Please give your URL a title.'
        }

      }
    }
  ]
  return inquirer.prompt(questions)
}

function listBookmarks(bookmarks) {
  let stringBookmarks = []
  bookmarks.forEach(bookmark => {
    if (bookmark) {
      stringBookmarks.push(`${bookmark.title} ${bookmark.pageOrUrl}`)
    }
  })
  const prompts = [
    {
      name: 'bookmarks',
      type: 'list',
      message: "Select a bookmark",
      choices: stringBookmarks
    }
  ]
  return inquirer.prompt(prompts)
}

module.exports = {
  newBookmark,
  listBookmarks
}
