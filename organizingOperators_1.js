// function multiplication(x,y,z){
//     console.log(x*y*z)
// }
// multiplication(3,4,2);

// function greet(name = "Anonymus") {

//     console.log(`ciao, ${name}!`);
// }
// greet();
// greet("David");

//komplex

function getAvailableBooks(books)
 {
    let availableBookTitles ="";
    for (const book of books) {
        if (book.stock > 0){

            availableBookTitles += `   ${book.title}\n`;
        }
    }
   return `ezek a könyvek elérhetőek:\n${availableBookTitles}`;
 }

const books = [
    {title: "majomkirály", author: "nemtom", stock:0},
    {title: "hahó", author: "barki", stock:3},
    {title: "gerillaharc", author: "huhh", stock:1}
]

const availableBookMessage = getAvailableBooks(books);
console.log(availableBookMessage) ;

// function calculatePrice(item, discount) {
//     return item.price * (1 - discount);
// }
// console.log(calculatePrice(5,5));

function greet(name, callback) {
    console.log(`Ciao, ${name}!`);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("David", sayGoodbye);