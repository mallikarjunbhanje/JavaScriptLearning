function factorial(number){

   if (number>0 && number<=1) {
    return 1;
   } else {
    return number* factorial(number-1);
   
   }
}

console.log(`The factorial of number 5 is:`,factorial(5));
console.log(`The factorial of number 7 is:`,factorial(7));
console.log(`The factorial of number 8 is:`,factorial(8));
console.log(`The factorial of number 12 is:`,factorial(12));
console.log(`-----------------------------------------------`);


