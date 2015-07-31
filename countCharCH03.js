
function countBs(text){
    var total = 0;
    for(var i=0; i<text.length; i++){
       if(text.charAt(i) === "B") {
           total = total +1;
       }
    }
    return total;
    }
function countChar(text, char){
    var total = 0;
    
    for(var i=0; i<text.length; i++)
    {
       if(text.charAt(i) === char) {
           total = total +1;
       }
    }
    return total;
    }
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

