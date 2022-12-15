var great="good morning";
console.log("given string is",great);

console.log("Total charactor of in this string is:",great.length);

var lengthTotal=great.length
console.log("======charAct==========");

console.log("chat at index 3 is:",great.charAt(3));

console.log("chat at last index is:",great.charAt(lengthTotal-1));

console.log("======concat==========");
var firstName="Mallikarjun";
var lastName="Bhanje";
var result= firstName + lastName;
console.log("concatnaction using+operator",result);
var result=firstName.concat(lastName);
console.log("concatnaction using concat",result);

var great=("Good Morning")
var indexOf= great.indexOf("M");
console.log("index of charactor M is",indexOf);
var indexOf= great.indexOf("nin");
console.log("index of sub string nin is",indexOf);

var great=("Good Morning")
var greatReplace=great.replace("Morning","afternoon");
console.log("replace sub tring morning with afternoon",greatReplace);
console.log(great.replace("Mor","Eve"));

var great=("      Good Morning     ")
console.log("Includes",great.includes("Good"));
console.log("Length",great.length);
var resultTrim= great.trim();
console.log("after Trim length is",resultTrim,resultTrim.length);

var great=("Good Morning")
var resultSlice=great.slice(0,4);
console.log("Slice method",resultSlice);

var studList=("gani,mani,vani,hani")
var studListSplit=studList.split(",")
console.log("student list split after ,",studListSplit);
console.log("Total no of students",studListSplit.length);

var sentence="guys you can do as much as possible";
var wordsInSentence= sentence.split(" ");
console.log("total no of words in sentence is",wordsInSentence.length);