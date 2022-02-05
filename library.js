const modal = document.getElementById('modal');
const btnOpenModal = document.getElementById('openModal');
const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btnOpenModal.onclick = function() {
    modal.style.display = 'block';
  }

//closes modal when user clicks x 
span.onclick = function() {
    modal.style.display = 'none';
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Close modal , use when user clicks submit to close form
function closeForm() {
  modal.style.display = 'none';
}

const form = document.getElementById('form');
const library = document.getElementById('library');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const formPages = document.getElementById('pages');
let readStatus = document.getElementById('read');
const btnDel = document.getElementById('delete');
const formAddBook = document.getElementById('addBook');


let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.read = read;
    this.id = title.toUpperCase() + pages;
  }
}

const addBook = (e) => {
  e.preventDefault();
  title = formTitle.value;
  author = formAuthor.value;
  pages = formPages.value;
  read = readStatus.checked;
  id = this.id;

  let newBook = new Book (title, author, pages, read);
  myLibrary.push(newBook);
  createBook(newBook);
  closeForm();
  console.log(myLibrary);
  document.getElementById('form').reset();
}

const createBook = (item) => {
  const bookCard = document.createElement('div')
  const cardTitle = document.createElement('h3');
  const cardAuthor = document.createElement('p');
  const cardPages = document.createElement('p');
  const cardRead = document.createElement('button');
  const cardDelete = document.createElement('button');

  bookCard.classList.add('bookCard');
  bookCard.setAttribute('id', item.id);
  library.appendChild(bookCard);

  cardTitle.innerText = item.title;
  cardTitle.style.textAlign = 'center';
  bookCard.appendChild(cardTitle);
  
  cardAuthor.innerText = `By: ${item.author}`;
  cardAuthor.style.textAlign = 'center';
  bookCard.appendChild(cardAuthor);

  cardPages.innerText = `${item.pages} pages`;
  cardPages.style.textAlign = 'center'
  bookCard.appendChild(cardPages);

  cardRead.classList.add('readBtn');
  cardRead.addEventListener('click', () => { // the value of book's read value will toggle between true/false
    item.read = !item.read;
    toggleRead(); // button text will change corresponding to book's read value
  })
  toggleRead(); //will display read status if read checkbox is checked or not.
  bookCard.appendChild(cardRead);
  
  function toggleRead() {
    if(item.read === false) {
      cardRead.innerText = 'Unread'
    } else cardRead.innerText = 'Read'
  }

  cardDelete.innerText = 'Remove';
  cardDelete.classList.add('removeBtn');
  cardDelete.addEventListener('click', () => { 
    let div = document.getElementById(item.id);
    div.parentElement.removeChild(div);    // removes this bookCard from DOM
    myLibrary.splice(myLibrary.indexOf(item), 1) // removes this object from myLibrary array
  }
  )
  bookCard.appendChild(cardDelete);
}

form.addEventListener('submit', addBook);












