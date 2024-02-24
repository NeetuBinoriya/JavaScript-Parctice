// Reduce array for Adding the numbers
// let num = [12, 24, 34, 56, 95]

// const output = num.reduce((grt,curr) =>{
    //     return grt + curr;
    // });
    // console.log(output);
    
    
// Reduce array for finding the greatest number

let num = [12, 24, 34, 56, 95]

const output = num.reduce((grt,curr) =>{
    return grt > curr ? grt : curr;
});
console.log(output);