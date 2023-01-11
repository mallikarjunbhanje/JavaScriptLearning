// Given the home work

// Anil -> Homework

function anilHomeWork(callback) {
    console.log("Anil is doing homework... ");
    console.log("After some time.. Anil did homework..");
    callback();
}

// Sunil -> Homework

function sunilHomeWork() {
    console.log("I am happy Anil, you have completed homework");
    console.log("I am bit lazy and don't have time as well");
    console.log("So copying as it is your homework");
}
anilHomeWork(sunilHomeWork);



console.log(`timeset function.............. it will run given interval of time`);
function show() {
    console.log("This is show function..");
}
setTimeout(show, 3000);

