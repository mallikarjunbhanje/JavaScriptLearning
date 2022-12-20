var monthOfYear = function (monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`Janury`);
            break;
        case 2:
            console.log(`02.   February`);
            break;
        case 3:
            console.log(`March`);
            break;
        case 4:
            console.log(`April`);
            break;
        case 5:
            console.log(`05.   May`);
            break;
        case 6:
            console.log(`June`);
            break;
        case 7:
            console.log(`July`);
            break;
        case 8:
            console.log(`August`);
            break;
        case 9:
            console.log(`September`);
            break;
        case 10:
            console.log(`Octtomber`);
            break;
        case 11:
            console.log(`November`);
            break;
        case 12:
            console.log(`12.   December`);
            break;
        default:
            console.log(`This is Invalid Month`);
            break;
    }

}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
