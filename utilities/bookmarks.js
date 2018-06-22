function list(bookmarks, cb) {
  const allBookmarks = bookmarks.split(/\r\n|\n/)
  for (let i = 0; i < allBookmarks.length; i++) {
    let tempBookmark = allBookmarks[i].split(',')
    allBookmarks[i] = { title: tempBookmark[0], pageOrUrl: tempBookmark[1] }
  }
  cb(allBookmarks)
}

module.exports = {
  list
}
