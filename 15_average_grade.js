let students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 }
];
let average = students.reduce((acc, s) => acc + s.marks, 0) / students.length;
let grade = average < 60 ? 'F' : average < 70 ? 'D' : average < 80 ? 'C' : average < 90 ? 'B' : 'A';
console.log(`Average: ${average}, Grade: ${grade}`);