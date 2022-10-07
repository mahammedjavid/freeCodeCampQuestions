var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]



// here i created copy of bookLit using restOperator and took one more arguments from user to push name of the nook to the same array
let add = function(arr,bookName){

    let newArr = [...arr]
    newArr.push(bookName)
    console.log(newArr)
}
// console.log(newArr)
add(bookList,"A Brief History of Time")


// same for removing the book 

function remove(arr2,bookName) {
  var newArr2 = [...arr2]
  const book_index = newArr2.indexOf(bookName);
  if (book_index >= 0) {

    newArr2.splice(book_index, 1);
    return newArr2;

    
    }
}
