// console.log(`Question 1`);

// var sentence = "I AM Learning JavaScript, The Language of internet";

// var counter = 0;
// for (let index = 0; index < sentence.length; index++) 
// {
//     var char = sentence.charAt(index);
//     if (char=='a'  ||char=='A' ) 
//     {
//         console.log(char);
//         counter = counter +1;
//     }
//     }
//     console.log(`Total vowels in a Or A  in given Sentance is : ${counter}`);


//     console.log(`Question 2`);

//     var sentence = "My favourite movie is LAggAn";

// var counter = 0;
// for (let index = 0; index < sentence.length; index++) 
// {
//     var char = sentence.charAt(index);
//     if (char=='a'  ||char=='A' ) 
//     {
//         console.log(char);
//         counter = counter +1;
//     }
//     }
//     console.log(`Total vowels in a Or A  in given Sentance is : ${counter}`);



    function countCharA(string) {
        var counter = 0;
        for (let index = 0; index < string.length; index++) {
            var char = string.charAt(index);
            if (char=='a' || char=='A' ) 
            {
                console.log(` the count of ${char}`);
                counter = counter +1;
               
            }   
    }
    console.log(`" ${string} ${counter} "`);
    
    }
    countCharA("I Am Learning JavaScript, The Language of internet");
   
    console.log("========================================================");
    countCharA("My favorite movie is LAggAn");

    