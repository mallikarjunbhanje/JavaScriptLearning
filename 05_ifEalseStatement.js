
console.log(`Boomm booom`);
var isRoadopen = true;
if (isRoadopen) {
    console.log(`yes Traveling thru express way`);
    console.log(`Travel will be short just for 2 hrs`);
} else {
    console.log(` no Traveling thru tunnel`);
    console.log(`Travel will be long just for 5 hrs`);
}


function isEvenOrOdd(num) {
    if (typeof num == "number") {
        console.log(`Valid number ${num}`);
        if (num % 2 === 0) { console.log(`Even number`); }
        else { console.log(`Odd Number`); }
    }
    else { console.log(`Invalid number ${num}`); }
} isEvenOrOdd(20); isEvenOrOdd(11); isEvenOrOdd("30");