function  resultReport( marks ) {
    if(Array.isArray(marks) === false){
        return "Invalid";
    }
    let pass = 0;
    let fail = 0;
    let sum = 0; 
    for(let mark of marks){
        sum = sum + mark;
        if(mark >= 40){
            pass++;
        } 
        if(mark < 40){
            fail++;
        }
    }
    let finalScore;
     if(marks.length !== 0){
        finalScore = Math.round(sum / marks.length);
    } else{
        finalScore = 0;
    }
    let Object = {};
    Object.finalScore = finalScore;
    Object.pass = pass;
    Object.fail = fail;
    return Object;
}