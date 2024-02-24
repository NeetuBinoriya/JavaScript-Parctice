// Wite a Code which can give grades to students according to their scores:
// 1. 80-100, A
// 2. 70-89, B
// 3. 60-69, C
// 4. 50-59, D
// 5. 0-49, Fail

const marks = prompt("Enter the Marks: ");
if(marks >=90 && marks <= 100){
    console.log("Grade : A");
}
else if(marks >= 70 && marks <=89){
    console.log("Grade : B");
}
else if(marks >= 60 && marks <=69){
    console.log("Grade : C");
}
else if(marks >= 50 && marks <=59){
    console.log("Grade : D");
}
else{
    console.log("Sorry You are Fail");
}