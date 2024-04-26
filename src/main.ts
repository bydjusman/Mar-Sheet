let mathsmarks = 65;
let physicsmarks = 35;
let englishmarks = 55;
let sciencemarks = 73;
let historymarks = 45;
let businessmarks = 70;
let geometrymarks = 77


let totalmarks = 300;
let obtainedMarks = mathsmarks + physicsmarks + englishmarks + sciencemarks;
let percentage = (obtainedMarks / totalmarks) * 100;

console.log("Marksheet");
console.log("Maths marks: " + mathsmarks);
console.log("Physics marks: " + physicsmarks);
console.log("English marks: " + englishmarks);
console.log("Science marks: " + sciencemarks);
console.log ("historymarks: " + historymarks);
console.log("Business marks: " + businessmarks);
console.log("Geometry marks: " + geometrymarks);

console.log("Total marks: " + totalmarks);
console.log("Obtained marks: " + obtainedMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%"); // Added toFixed for better formatting

if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 70) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else if (percentage >= 50) {
    console.log("Grade: D");
} else if (percentage >= 40) {
    console.log("Grade: E");
} else {
    console.log("Grade:F");
} 