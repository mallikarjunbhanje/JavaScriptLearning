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

console.log(`Travasing array using for loop`);
for (let index = 0; index < arrayOfNumber.length; index++) {
    const element = arrayOfNumber[index];
    console.log(element);
    
}

console.log(`Travasing array using for loop in reverse order`);
let lastIndex=arrayOfNumber.length-1;
for (let index = lastIndex; index > 0; index--) {
    const element1 = arrayOfNumber[index];
    console.log(element1);
}


// array of salaries
console.log(`Accssing salaries in each employee`);
let arrayOfSalaries=[10000,40000,30000,50000,30000]
let sumOfSal=0;
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index];
    sumOfSal=sumOfSal+element;
    // console.log(element);
}
console.log(`total salaries of all employee is ${sumOfSal}`);



console.log(`==========push method=================`);
var arrayOfNum=[1,5,3,7,9,8,4];
console.log(arrayOfNum);
arrayOfNum.push(2); // adding element in last than we use push
console.log(arrayOfNum);

console.log(`==========unshift method=================`);
var arrayOfNum=[1,5,3,7,9,8,4];
console.log(arrayOfNum);
arrayOfNum.unshift(22);
console.log(arrayOfNum);

console.log(`==========pop method=================`);
arrayOfNum.pop(); //use this delete the last elememnt in array
console.log(arrayOfNum);

console.log(`==========shift method=================`);
arrayOfNum.shift(); //use this delete the first elememnt in array
console.log(arrayOfNum);

console.log(`==========slice  method=================`);
var arrayOfNum=[1,5,3,7,9,8,4];
let sliceResult=arrayOfNum.slice(2); // using remove before that index value as below
console.log(sliceResult);

//if you return the value index 2 to index 5 than use below method
var arrayOfNum=[1,5,3,7,9,8,4];
let sliceRes=arrayOfNum.slice(2,5);
console.log(sliceRes);

console.log(`==========splice  method=================`);
var arrayOfNum=[1,5,3,7,9,8,4];
arrayOfNum.splice(3); // use this remove elememt tata particular index like below
console.log(arrayOfNum);

var arrayOfNum=[1,5,3,7,9,8,4];
arrayOfNum.splice(1,3); // use this that particular element to that mentioned element like below
console.log(arrayOfNum);
console.log(`--------insert inbetwwn elements--------------`);
var arrayOfNum=[1,5,3,7,9,8,4];
arrayOfNum.splice(2,0,77); // insert the value inbetween elements middle 0 means no any replace only insert that 
console.log(arrayOfNum);

console.log(`--------Replace inbetwwn elements--------------`);
var arrayOfNum=[1,5,3,7,9,8,4];
arrayOfNum.splice(2,1,21); // replace element that particular index 1 means replace one value
console.log(arrayOfNum);


console.log(`for of loop`);
var arrayOfNum=[1,5,3,7,9,8,4];
for (const elememt of arrayOfNum) {
    console.log(elememt);
}

console.log(`include method`);// means given array is present in that array or not
var arrayOfNum=[1,5,3,7,9,8,4];
arrayOfNum.includes(3);
console.log(arrayOfNum);

console.log(`array join method`);
var arrayOfNum=[1,5,3,7,9,8,4];
arrayjoin=arrayOfNum.join("|");
console.log(arrayjoin);

console.log(`two array concact method`);
var arrayOfNum=[1,5,3,7,9,8,4];
var arrayOfNames=["ganesh","amol","vinod","sachin"]
var arrayconcat=arrayOfNum.concat(arrayOfNames)
console.log(arrayconcat);
console.log(`type of array is ${typeof arrayconcat}`);


console.log(`resize array method`);
var arrayOfNum=[1,5,3,7,9,8,4];
console.log(arrayOfNum.length);
arrayOfNum.length=5;
console.log(arrayOfNum);