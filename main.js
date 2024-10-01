let myLibrary = []
let count = 0

function Book(title, author, read) {
  this.title = title
  this.author = author
  this.read = read
  this.index = count
  count++
}

function isBook(book) {
  if (Object.getPrototypeOf(book) === Book.prototype) return true
}


// function bookInLibrary(book) {
//   if(myLibrary.includes(book)){
//     alert(`${book} in Library allredy!`)
//   }
// }


function changeReadStatus(book) {
  book.read == 'yes' ? (book.read = 'no') : (book.read = 'yes')
}

function addBookToLibrary(book) {
  if (isBook(book)) {
    myLibrary.push(book)
  }
}

function showAllCard(){
  myLibrary.forEach((book) => addBookCard(book))
}

function deleteBook(book) {
  const btnDel = document.querySelectorAll('.btnDel')
  btnDel.forEach((btn) => {
    if (btn.dataset.delete == book.index){
      btn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.card')
        myLibrary = myLibrary.filter(e => e.index != book.index)
        cards.forEach((card)=> card.remove())
        showAllCard()
      })
    }
  })
}

function changeRead(book) {
  const btnRead = document.querySelectorAll('.btnRead')
  btnRead.forEach((btn) => {
    if(btn.dataset.read == book.index){
      btn.addEventListener('click', () => {
        changeReadStatus(book)
        const cards = document.querySelectorAll('.card')
        cards.forEach((card) => card.remove())
        showAllCard()
      })
    }
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

  const svgReadNS = './icons/book-open.svg'
  const svgRead = document.createElement('img')
  svgRead.src = svgReadNS
  btnRead.appendChild(svgRead)

  const btnDel = document.createElement('button')
  btnDel.classList.add('btnDel')
  btnDel.setAttribute('data-delete', book.index)
  btns.appendChild(btnDel)

  const svgDelNS = './icons/delete-forever.svg'
  const svgDel = document.createElement('img')
  svgDel.src = svgDelNS
  btnDel.appendChild(svgDel)

  changeRead(book)
  deleteBook(book)
}

const harryPotter = new Book('Harry Potter', 'Rouling', 'yes')

addBookToLibrary(harryPotter)

const darkTower = new Book('Dark Tower', 'King', 'yes')

addBookToLibrary(darkTower)

const hobbit = new Book('Hobbit', 'Tolkien', 'no')

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

showAllCard()