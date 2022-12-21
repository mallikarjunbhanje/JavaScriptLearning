console.log(`for using while loop break statment`);
var i=0
while (i<=10) {
   console.log(i); 
if (i==5) {
    break;
}
   i++
}
console.log(`for using for loop break statment`);
for (let index = 0; index<20; index++) {
    console.log(index);
    if (index>=11) {
        break;
    }
}