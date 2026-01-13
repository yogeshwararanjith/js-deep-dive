function pow(x,n){
    let result = 1;
    for(let i=1;i<=n;i++){
        result *= x;
    }
    return result;
}

console.log(pow(2,3))

// recursive way

function powRecursive(x,n){
    if(n==1){
        return x;
    }
    return x * pow(x,n-1);
}

console.log("recursive:",powRecursive(2,3))