function display() {
    console.log("my Name is: Mallikarjun");
    console.log("my Sir Name is: Bhanje");

}
display (); //function calling

function show(){
    console.log("My College Name is: TKIET Warananagar");
}
show ();

function swapvalue(value1,value2){
console.log("before swap",value1,value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("after swap",value1,value2); 
}
swapvalue(100,200);
swapvalue(2,4);
swapvalue("Ganesh","arjun");
swapvalue("you","me");

function multiply(num1,num2){
    var result= num1*num2
console.log(result);
return result;

}
var multiplyResult = multiply(56,45);
var finalResult = multiplyResult+200;
console.log(finalResult);
