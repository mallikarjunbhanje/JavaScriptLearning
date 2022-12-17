var ageEligible=function(age){

    var result=age>18  ?`your age is ${age} Eligible for Voating`:`your age is ${age} not eligible for voating`
console.log(result);
}
ageEligible(45)
ageEligible(17)
ageEligible(8)
ageEligible(20)


var age1=function(age){

var result=age<0 && age>120? `age is ${age} its invalid data`:`your age is ${age} its invalid data`
console.log(result);
}
    age1(-10);
    age1(200)
   age1(0)

   console.log(`==========================================================================`);

   gradeCalculation=function(marks){
if (marks>=90) {
    console.log(`famtastic your marks is ${marks} your grade is A+`);
}

   }
   gradeCalculation(90);
   gradeCalculation=function(marks){
    if (marks>=75) {
        console.log(`Excellent your marks is ${marks} your grade is A+`);
    }
       }
   gradeCalculation(75);
   
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