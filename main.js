const myLibrary = []

function Book(title, author, read, index = 0) {
  this.title = title
  this.author = author
  this.read = read
  this.index = index
}

function isBook(book) {
  if (Object.getPrototypeOf(book) === Book.prototype) return true
}

/*
function bookInLibrary(book) {
  if(myLibrary.includes(book)){
    alert(`${book} in Library allredy!`)
  }
}
*/

function changeReadStatus(book) {
  book.read == 'yes' ? (book.read = 'no') : (book.read = 'yes')
}

function addBookToLibrary(book) {
  if (isBook(book)) {
    myLibrary.push(book)
    book.index = myLibrary.indexOf(book)
  }
}

function deleteBook() {
  const btnDel = document.querySelectorAll('.btnDel')
  btnDel.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idBtnDelete = btn.dataset.delete
      const cards = document.querySelectorAll('.card')
      cards.forEach((card) => {
        if (card.dataset.id === idBtnDelete) card.remove()
      })
      myLibrary.splice(idBtnDelete, 1)
    })
  })
}

function changeRead() {
  const btnRead = document.querySelectorAll('.btnRead')
  btnRead.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const idBtnRead = btn.dataset.read
      const cards = document.querySelectorAll('.card')
      cards.forEach((card) => {
        if (card.dataset.id === idBtnRead) {
          changeReadStatus(myLibrary[idBtnRead])
          console.log('++++++++')
        }
      })
    })
  })
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

  // const index = document.createElement('p')
  // read.textContent = `Index: ${book.index}`
  // card.appendChild(index)
  card.setAttribute('data-id', book.index)

  const btns = document.createElement('div')
  btns.classList.add('btns')
  card.appendChild(btns)

  const btnRead = document.createElement('button')
  btnRead.classList.add('btnRead')
  btnRead.setAttribute('data-read', book.index)
  btns.appendChild(btnRead)
  changeRead()

  const svgReadNS = './icons/book-open.svg'
  const svgRead = document.createElement('img')
  svgRead.src = svgReadNS
  btnRead.appendChild(svgRead)

  const btnDel = document.createElement('button')
  btnDel.classList.add('btnDel')
  btnDel.setAttribute('data-delete', book.index)
  btns.appendChild(btnDel)
  deleteBook()

  const svgDelNS = './icons/delete-forever.svg'
  const svgDel = document.createElement('img')
  svgDel.src = svgDelNS
  btnDel.appendChild(svgDel)
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

ok.addEventListener('click', function (e) {
  const newBook = new Book(title.value, author.value, read.value)
  addBookToLibrary(newBook)
  addBookCard(newBook)
  cancel.click()
  e.preventDefault()
})
