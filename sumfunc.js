// Create a function for adding two numbers
// function sum(a,b){
//     console.log(a+b)
// }
// sum(10,15)

// Q: Create a Function using the "Finction" Keyword that takes a String as an aurgument & returns the number of vowels in the string

// With Normal Function

// function countVowel(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u" ||
//       char === "A" ||
//       char === "E" ||
//       char === "I" ||
//       char === "O" ||
//       char === "U"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowel("Apna College Hello World Appple");


// With Arrow Function
const countVowel = (str) => {
    let count = 0;
    for (let char of str) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" ||
        char === "A" ||
        char === "E" ||
        char === "I" ||
        char === "O" ||
        char === "U"
      ) {
        count++;
      }
    }
    console.log(count);
  }
  countVowel("Apna College Hello World");
  
