
function anotherFunction() {
    let thisText = "kifli";
    function logIntoTerminal() {
        console.log(thisText);
        let localText = "szülői 2 helyen egyszerre";
        console.log(localText);
    }
    logIntoTerminal();
}

function getAvailableBooks(books) {
    let availableBookTitles = "";
    for (const book of books) {
      if (book.stock > 0) {
        availableBookTitles += `${book.title} 
  `;
      }
    }
    return `The following books are available: ${availableBookTitles} 
  `;
  }
  
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", stock: 0 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", stock: 5 },
    { title: "1984", author: "George Orwell", stock: 3 },
    { title: "Pride and Prejudice", author: "Jane Austen", stock: 2 }
  ];
  
  const availableBooksMessage = getAvailableBooks(books);
  
  
