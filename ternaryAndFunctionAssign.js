var sCandicate=function(gradScore,hscScore,sscScore,candicateName){

    var result= gradScore>=70 || hscScore>=80 || sscScore>=90 ? `Congrates ${candicateName} you are eligable for TCS Interview` : `Sorry ${candicateName} Unfortunately you are not eligible for TCS interview`
console.log(result);
}
    sCandicate(80,86,90,'Mallikarjun')
    sCandicate(60,66,70,'Ganesh')
    sCandicate(60,79,88,'sachin')
    