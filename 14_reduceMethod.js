const arrayOfNumber = [0, 2, 3, 5, 6, 8 ];
const result = arrayOfNumber.reduce( (runningTotal, value) => {
    return runningTotal + value; } );
    console.log(result);