const myLibrary = []

function Book(title, author, read) {
  this.title = title
  this.author = author
  this.read = read
}

function isBook(book) {
  if (Object.getPrototypeOf(book) === Book.prototype) return true
}

function addBookToLibrary(book) {
  if (isBook(book)) myLibrary.push(book)
}

function addBookCard(book) {
  const cards = document.querySelector('.cards')

  const card = document.createElement('div')
  card.classList.add('card')
  cards.appendChild(card)

  const title = document.createElement('h3')
  title.textContent = book.title
  card.appendChild(title)

  const author = document.createElement('p')
  author.textContent = `Writing by ${book.author}`
  card.appendChild(author)

  const read = document.createElement('p')
  read.textContent = `Read: ${book.read}`
  card.appendChild(read)
}

const harryPotter = new Book('Harry Potter', 'Rouling', 'yes')

addBookToLibrary(harryPotter)

const darkTower = new Book('Dark Tower', 'King', 'yes')

addBookToLibrary(darkTower)

const hobbit = new Book('Hobbit', 'Tolkien', 'no')

myLibrary.forEach((book) => addBookCard(book))

//addBookCard(harryPotter)

//console.log(harryPotter.read)
//const cards = document.querySelectorAll('.card')

const addBook = document.getElementById('addBook')
const cancel = document.getElementById('cancel')
const ok = document.getElementById('ok')
const addBookDialog = document.getElementById('addBookDialog')

addBook.addEventListener('click', function () {
  addBookDialog.showModal()
})

cancel.addEventListener('click', function () {
  addBookDialog.close()
})

ok.addEventListener('click', function () {
  const newBook = new Book(title.value, author.value, read.value)
  console.log(title.value, author.value, read.value)
  addBookToLibrary(newBook)
  addBookCard(newBook)
  cancel.click()
})
