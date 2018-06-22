const inquirer = require('inquirer')

const newBookmark = () => {
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

module.exports = {
  newBookmark
}
