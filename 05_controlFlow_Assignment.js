function countCharA(string) {
    var counter = 0;
    for (let index = 0; index < string.length; index++) {
        var char = string.charAt(index);
        if (char=='a' || char=='e'|| char=='i'|| char=='o'|| char=='u'|| char=='I' ) 
        {
            // console.log(` the count of ${char}`);
            counter = counter +1;
           
        }   
}
console.log(` "${string}" in this sentance total number of vowels is: ${counter} `);

}
countCharA("I am very good IT Developer");
console.log(`----------------------------------------------------------------`);
function cube (number){
var num1=1*1*1;
var num2=2*2*2;
var num3=3*3*3;
var num4=4*4*4;
var num5=5*5*5;
console.log("sum of cube of 1 to 5 numbers is:",num1+num2+num3+num4+num5);

}
cube(1,2,3,4,5);
console.log(`------------------------------------------------------------------`);
function oddPosition(word){
    var totalLength=word.length;
    var empty="";
    for (let index = 0; index < totalLength; index++) {
       
    var result=word.charAt(index)
    if (index%2!==0 && result!=" ") {
        empty=empty+result;
    }
    
    }
    console.log(empty);
    }
    oddPosition("Hard work always pays back");