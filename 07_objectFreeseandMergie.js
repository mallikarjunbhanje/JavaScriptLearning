// object freesing
const anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
Object.freeze(anil); //once freese that object than we canot change it as like below
anil.country = "India";
anil.age = 27;
delete anil.company;
console.log(anil);


// Array freezing
const arrayNumbers = [2, 4, 5, 8];
Object.freeze(arrayNumbers);
//arrayNumbers.push(10); not allowed now this array is freesed
console.log(arrayNumbers);


// we want to mergine two object
const sunil={
    age:24,
    name:"sunil",
    company:"Google"
}

const sunilAddress = {
    city : "Pune",
    pin: "431202"}
    // Merging two objects

    Object.assign(sunil,sunilAddress)
    console.log(sunil);