const myLibrary = []

function Book(title, author, read = false) {
  this.title = title
  this.author = author
  this.read = false
}

function isBook(book) {
  if (Object.getPrototypeOf(book) === Book.prototype) return true
}

function addBookToLibrary(book) {
  if (isBook(book)) myLibrary.push(book)
}

addBookToLibrary('HP')
const harryPotter = new Book('Harry Potter', 'Rouling', true)

addBookToLibrary(harryPotter)

console.log(myLibrary)
