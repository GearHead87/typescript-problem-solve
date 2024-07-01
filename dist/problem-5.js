"use strict";
// Sample Input:
const student1 = {
    name: 'Bob',
    age: 17,
    grades: [75, 80, 82, 88, 90],
};
const calculateAverageGrade = (obj) => {
    const totalGrades = obj.grades.reduce((totalGrades, CurrentGrades) => {
        return (totalGrades += CurrentGrades);
    });
    let totalLength = obj.grades.length;
    return totalGrades / totalLength;
};
const averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob);
// Sample Output:
// 83;
