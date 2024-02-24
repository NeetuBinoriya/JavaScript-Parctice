// For a given array with marks of students : [85, 97, 44, 37, 76, 60].find the average marks of the entire class.
let sum = 0;
const marks =[85, 97, 44, 37,76, 60]
for(let val of marks){ //******FOR OF LOOP*****
     sum +=val;
    }
    console.log(sum);
    let avg = sum / marks.length;
    console.log(`The average marks of the entire class is : ${avg}`);