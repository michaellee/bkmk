const fs = require('fs')

function read (file, cb) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err
    cb(data)
  })
}

function write (file, data, cb) {
  const entry = `${data.title},${data.pageOrUrl}\n`
  fs.appendFile(file, entry, (err) => {
    if (err) throw err
    cb()
  })
}

function exists(file, cb) {

}

module.exports = {
  read,
  write
}
