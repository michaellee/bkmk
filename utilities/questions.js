const inquirer = require('inquirer')

const newBookmark = () => {
  const questions = [
    {
      name: 'url',
      type: 'input',
      message: 'Enter URL of book:',
      validate: (value) => {
        if (value.length) {
          return true
        } else {
          return 'Please enter a URL for a book.'
        }
      }
    },
    {
      name: 'title',
      type: 'input',

    }
  ]
}

module.exports = {
  newBookmark
}
