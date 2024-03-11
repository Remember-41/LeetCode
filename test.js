const isRight = function(str){
    let queue = [];
    const left = ["{","[","("];
    const right = ["}","]",")"];
    let level = [0];
    for(let i=0;i<str.length;i++){
        if(left.includes(str[i])){
            if(left.indexOf(str[i])>=Math.max(...level)){
                level.push(left.indexOf(str[i]));
                queue.push(str[i]);
            }
            else {
                return false;
            }
        }
        else if(right.includes(str[i])){
            let s = queue.pop();
            level.pop();
            if(!left.includes(s)||left.indexOf(s)!==right.indexOf(str[i])){
                return false;
            }
        }
    }
    if(queue.length === 0){
        return true;
    }
    else{
        return false;
    }
}