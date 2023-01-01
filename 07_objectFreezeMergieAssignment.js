console.log(`1) Object personal Details`);
const personalDetails = {
    name: "Mallikarjun",
    age: 24,
    city: "Solapur",
    pin: 413305,
    eduction: "BE"
}
console.log(personalDetails)

console.log(`2) Object College Details`);
const collegeDetails = {
    College: "TKIET Warananagar",
    city: "Kolhapur",
    deparments: 6,
    underuniversity: "shivaji Univerity"
}
console.log(collegeDetails);

console.log(`3) merging two objects personal Details & college details`);
Object.assign(personalDetails,collegeDetails)
console.log(personalDetails);

console.log(`4) array object friendname and freezing `);

const friendName=["Ganesh","Tanaji","vishal","Arjun","viond"]
Object.freeze(friendName)
console.log(friendName);

console.log(`5) Iterate array using objct `);
for (const elememt of friendName) {
    console.log(elememt);
}
console.log(`6) Reverse Technology word `);
let contant="Codemind Technology"
console.log(`the given string is ${contant} Reverse Technology ----->ygolonhceT`);