/// n = 3**x

function powerof3(n){
    if(n <= 0){
        return false;
    }
    while(n > 1){
        if(n%3 == 0){
            n = n/3;
        }else{
            return false;
        }
    }
    return true;
}

console.log(powerof3(27))


// recursive way

let isPowerOfThree = function(n){
      if(n <= 0){
        return false;
    }
    else if(n == 1){
        return true;
    }

    return n%3 == 0 ? isPowerOfThree(n/3) : false;
}

console.log(isPowerOfThree(15))