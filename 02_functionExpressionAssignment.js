var square= function(num){
console.log("Square of",num,"is=",num*num);

};
square(5);
square(6);
square(25);
square(100);
var squar= typeof square
console.log("Type of Function Name is:",squar);

console.log("----------------------------------------------------------");

var area=function(num1,num2){
    console.log("Area of Reactangle is:",num1*num2);
}
area(499,917);
console.log("----------------------------------------------------------");

function swapValueDude(value1,value2){
    console.log("before swap",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("after swap:",value1,value2); 
    }
    swapValueDude("virat","Anuksha");
    swapValueDude(1000,2000);
    console.log("---------------------------------------------------------------");

    var string="JS the most popular language"
    console.log("The given string is :",string);
    var lengthTotal=string.length
    console.log("total character available in the string is",string.length);
    console.log("character at index 6 is",string.charAt(6));
    console.log("character at index 11 is",string.charAt(11));
    console.log("chat at last index is:",string.charAt(lengthTotal-1));
    console.log("Firest character of given string is",string.charAt(0));
console.log("total character available in the string is",string.length,"and square of length is:784");
console.log("---------------------------------------------------------------");