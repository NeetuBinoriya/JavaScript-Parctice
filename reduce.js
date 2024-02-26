// Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

let num = prompt("Enter any number: ")

let arr = []
for(let i = 1; i<= num; i++){
    arr[i-1] = i;
}
console.log(arr)

let sum = arr.reduce((val, curr) =>{
    return val + curr;
})
console.log(sum)

let product = arr.reduce((val, curr) =>{
    return val * curr;
});
console.log(product)


// document.write("Hello World!")