// Create an Array to store companies : "Bloomberg", "Microsoft", "Uber", "Google", "IBM","Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// a. Remove the first company from the array

// arr.shift();
// console.log(arr);

// b. Remove Uber & Add Ola in its place
// arr.splice(2,1,"Ola");
// console.log(arr);

// c. Add Amazon at the end
arr.push("Amazon");
console.log(arr)
console.log(arr.length)
