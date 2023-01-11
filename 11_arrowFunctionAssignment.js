console.log(`==========Question1===============`);
let show = ()=>{
    console.log("Good Evening, Todays is Monday");
}
show();

console.log(`==========Question2===========`);
let sum = (n1, n2,n3)=>{
    console.log(n1*n2*n3);
}
console.log(`Multificatiion of 5 5 2 number is`);
sum(5, 5,2);

console.log(`multification of two number 10 and 4 with default value 1`);
let sum1 = (n1, n2,n3=1)=>{
    console.log(n1*n2*n3);
}

sum1(10, 4);


console.log(`==========Question3===========`);

let multiply = (n1, n2,n3,n4,n5,)=> {
    let add = n1+n2+n3+n4+n5;
    return add;
}
let addResult = multiply(100, 100,200,349,756);
console.log(addResult);


let multiply1 = (n1, n2,n3,n4,n5,n6,n7,n8,n9)=> {
    let add = n1+n2+n3+n4+n5+n6+n7+n8+n9;
    return add;
}
let addResult1 = multiply1("I am"," ","learning"," ","ES6"," ","features"," ","in depth");
console.log(addResult1);

