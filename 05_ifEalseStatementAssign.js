console.log(`===========Question 1.=================`);

var voating=function(age){
if (age<=0 || age>120) {
    console.log(`age is ${age} Invalid data`);
} else {
    console.log(`your age is ${age} Invalid Data`);
    if (age>=18) {
        console.log(`your age is ${age} you are eligable for voating `);
    } else {
        console.log(`your age is ${age} you are not eligable for voating `);
    }
}

}
voating(45);
voating(17);
voating(8);
voating(-10);
voating(200);
voating(0);

console.log(`===========Question 2.=================`);

gradeCalculation=function(marks){
    if (marks>=90) {
        console.log(`famtastic your marks is ${marks} your grade is A+`);
    }
    
       }
       gradeCalculation(98);
       gradeCalculation=function(marks){
        if (marks>=75) {
            console.log(`Excellent your marks is ${marks} your grade is A+`);
        }
           }
       gradeCalculation(80);
       
       gradeCalculation=function(marks){
        if (marks>=50) {
            console.log(`Good your marks is ${marks} your grade is B`);
        }
           }
       gradeCalculation(50);
       
       gradeCalculation=function(marks){
        if (marks>=35) {
            console.log(` your marks is ${marks} your grade is C Need Improvement`);
        }
           }
       gradeCalculation(35);
       
       gradeCalculation=function(marks){
        if (marks>=35) {
            console.log(` your marks is ${marks} your grade is C+`);
        }
           }
       gradeCalculation(49);
       gradeCalculation=function(marks){
        if (marks<=0) {
            console.log(`marks is  ${marks} Please inter valid marks`);
        }
           }
       gradeCalculation(-7);
       gradeCalculation=function(marks){
        if (marks>=100) {
            console.log(` marks is ${marks} Please inter valid marks`);
        }
           }
       gradeCalculation(150);