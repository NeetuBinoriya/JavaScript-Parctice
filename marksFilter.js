// We are given array of marks of students. Filter out of the marks of students that scored 90+.
let marks = [87, 92, 95, 90, 75, 85, 77, 53, 56]

let output = marks.filter((grt) => {
    return grt >= 90;
});
console.log(output)