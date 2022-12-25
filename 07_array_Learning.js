let arrayOfNumber= [10,true,4,5,"Ganesh",7,11]; 
console.log(arrayOfNumber);

console.log(`Total number of elements available in array`);

let result=arrayOfNumber.length;
console.log(result);

let type= typeof arrayOfNumber;
console.log(type);

console.log(`Accssing array elements`); //access the arrey elements
let elementIndex=arrayOfNumber[0];
console.log(`element at 0 index ${elementIndex}`);
console.log(`element at 1 index ${arrayOfNumber[1]}`);
console.log(`element at last index ${arrayOfNumber[result-1]}`);

arrayOfNumber[2]=100; //update the index value 
console.log(arrayOfNumber);

console.log(`index of number `);
let indexof=arrayOfNumber.indexOf(7);
console.log(indexof);
console.log(`------------array using for loop-------------------------------------------`);
for (let index = 0; index < arrayOfNumber.length; index++) {
    const element = arrayOfNumber[index];
    console.log(element);
}
console.log(`index value is even than log the console`);
for (let index = 0; index < arrayOfNumber.length; index++) {
    if (index%2==0) {
        const element = arrayOfNumber[index];
    console.log(element);
    }
    
}