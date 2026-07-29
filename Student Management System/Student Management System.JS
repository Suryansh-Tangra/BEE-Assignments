const students = [
  { id: 101, name: "Aman", marks: 82, course: "Java" },
  { id: 102, name: "Priya", marks: 95, course: "Python" },
  { id: 103, name: "Rahul", marks: 67, course: "Java" },
  { id: 104, name: "Neha", marks: 76, course: "Web" },
  { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

students.push({ id: 106, name: "Simran", marks: 91, course: "Java" });
console.log("Task 1 - after push:");
console.log(students);

let removed1 = students.pop();
console.log("\nTask 2 - removed student (pop):");
console.log(removed1);

students.unshift({ id: 100, name: "Ankit", marks: 80, course: "Web" });
console.log("\nTask 3 - after unshift:");
console.log(students);

let removed2 = students.shift();
console.log("\nTask 4 - removed student (shift):");
console.log(removed2);

for (let i = 0; i < students.length; i++) {
  if (students[i].id == 103) {
    students.splice(i, 1, { id: 107, name: "Karan", marks: 78, course: "Java" });
    break;
  }
}
console.log("\nTask 5 - after splice:");
console.log(students);

const arr = [
  { id: 101, name: "Aman", marks: 82, course: "Java" },
  { id: 102, name: "Priya", marks: 95, course: "Python" },
  { id: 103, name: "Rahul", marks: 67, course: "Java" },
  { id: 104, name: "Neha", marks: 76, course: "Web" },
  { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

let firstThree = arr.slice(0, 3);
console.log("\nTask 6 - first 3 students:");
console.log(firstThree);

console.log("\nTask 7 - for...of loop:");
for (let s of arr) {
  console.log(s.name + " - " + s.course + " - " + s.marks);
}

console.log("\nTask 8 - forEach names:");
arr.forEach(function (s) {
  console.log(s.name);
});

let allNames = arr.map(s => s.name);
console.log("\nTask 9 - map names:");
console.log(allNames);

let toppers = arr.filter(s => s.marks >= 80);
console.log("\nTask 10 - marks >= 80:");
console.log(toppers);

let total = arr.reduce((sum, s) => sum + s.marks, 0);
console.log("\nTask 11 - total and average:");
console.log("Total Marks = " + total);
let avg = total / arr.length;
console.log("Average = " + avg.toFixed(1));

console.log("\nTask 12 - sort ascending:");
let asc = [...arr].sort((a, b) => a.marks - b.marks);
asc.forEach(s => console.log(s.marks));

console.log("\nTask 12 - sort descending:");
let desc = [...arr].sort((a, b) => b.marks - a.marks);
desc.forEach(s => console.log(s.marks));