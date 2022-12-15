var num1=10;
var num2="10";
var result=num1==num2 ? "equal":"not Equal";

console.log(`num1==num2 result is: ${result}`);


var res=num1===num2 ? "equal":"not Equal";

console.log(`num1==num2 result is: ${res}`);


// If SSC marks greater than or equal to 35 is pass or fail

var sscMarks= 73;

var result=sscMarks>=35? "Pass" : "fail";

console.log(`Result is ${result}`);

var sscResult=function(sscMarks){

resultOf=(sscMarks>=35  && !(sscMarks>100)) ? "Pass" : "fail";
return resultOf;
}
console.log(`result of 23 is ${sscResult(23)}`);//valid value
console.log(`result of 73 is ${sscResult(73)}`);//valid value
console.log(`result of ten is ${sscResult("ten")}`);//invalid value
console.log(`result of 1300 is ${sscResult(1300)}`);//invalid value