var fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`=========Question1=================`);
var result=fruits_seasonal[0];
var result1=fruits_seasonal[4];
console.log(`The First element of array is:`,result); 
console.log(`The last element of array is:`,result1); 

console.log(`=========Question2=================`);
var  fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal.splice(0,0,"Papaya")
console.log(`Adding papaya before banana`);
console.log(fruits_seasonal);

console.log(`=========Question3=================`);
var  fruits_seasonal=["papaya","Banana","Orange","Apple","Water Melon","Mango"];
fruits_seasonal.splice(5)
console.log(`Remove Mango from array`);
console.log(fruits_seasonal);

console.log(`=========Question4=================`);
var  fruits_seasonal=["papaya","Banana","Orange","Apple","Water Melon","Mango"];
fruits_seasonal.push("Pineapple");
console.log(`Adding the Pineapple at last position`);
console.log(fruits_seasonal);

console.log(`=========Question5=================`);
var  fruits_seasonal=["papaya","Banana","Orange","Apple","Dragon Fruit","Water Melon","Mango"];
console.log(`Add dragon fruit before water melon`);
fruits_seasonal.slice(3,0,"Dragon fruit")
console.log(fruits_seasonal);

console.log(`=========Question6=================`);
var  fruits_seasonal=["papaya","Banana","Kiwi","Apple","Dragon Fruit","Water Melon","Mango"];
console.log(`Replace kiwi with orange`);
fruits_seasonal.slice(2,1,"Kiwi")
console.log(fruits_seasonal);

console.log(`=========Question7=================`);
var  fruits_seasonal=["papaya","Banana","Kiwi","Apple","Dragon Fruit"];
fruits_seasonal.slice(5)
console.log(`log first 1 to 4 elements`);
console.log(fruits_seasonal);

console.log(`=========Question8=================`);
var  fruits_seasonal=["Dragon Fruit","Water Melon","Mango"];
fruits_seasonal.slice(2,1,"Kiwi")
console.log(`last three elements`);
console.log(fruits_seasonal);
