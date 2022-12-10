
console.log("---------------------------------------------------------------");
function display() {
    console.log("I Like Visiting new Places");
}
display();
console.log("---------------------------------------------------------------");
function body() {
    console.log("I Like playing Crickt");
}
body();
console.log("---------------------------------------------------------------");

function personalDetails(firstName, lastName, collegeName) {
    console.log("Details:Mallikarjun", "Bhanje", "TKIET Warananagar");
}
personalDetails();

console.log("---------------------------------------------------------------");

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

    function addThreeValues( value1,value2,value3){
        console.log("After Adding the Values:",value1+value2+value3 );
    }
    addThreeValues(10.23,600,40);
    addThreeValues("Hello","Good","Morning");
    console.log("---------------------------------------------------------------");
