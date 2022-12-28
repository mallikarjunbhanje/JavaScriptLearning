let person = {
    name: "Ganesh",
    "height": 6,
    "weight": 70,
    "age": 25,
    speak: function(){
        console.log(`hey i can speak english and hindi`);
    }
}
console.log(typeof person);
console.log(person);
console.log(`============Accessing object properties using dot notation==================`);
let age=person.age
console.log(`person asge is :${age}`);

console.log(`============Accessing function in object==================`);
person.speak()
console.log(person);
console.log(`============Adding  properties into object==================`);
person.company="google"
console.log(person);

console.log(`============Updating  properties into object==================`);
person.age=45
console.log(person);


console.log(`============deleteing  properties into object==================`);
delete person.weight
console.log(person);

console.log(`============creating empty object==================`);
 const mobile={


 }
mobile.company="Moto" 
mobile.camera="20px"
console.log(mobile);



console.log(`Nested object`);
const student = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70,
        math: 90,
        english: 87,
        add: function() {
            return this.science+this.math+this.english;
        }
    },
    familyMemberNames: [ 'Tony', 'Lonny', 'Jenny', 'Watigton']
}
console.log(`Accessing an Nested object property`);
const scienceMark = student.marks.science;
console.log(scienceMark);

console.log(`Updating an Nested object property`);
let upmarks=student.marks.english = 97;
console.log(upmarks);

console.log(`Adding an Nested object property`);
let addpro=student.marks.programming = 100;
console.log(addpro);

console.log(`Deleting an Nested object property`);
// delete student.marks.english;

console.log(`Adding marks  an Nested object property`);
let totalMarks=student.marks.add();
console.log(totalMarks);


console.log(`Accessing an array`);
console.log(student.familyMemberNames);


console.log(`Object entries`);
const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates"
}
console.log(Object.entries(billgates));
console.log(Object.keys(billgates));
console.log(Object.values(billgates));