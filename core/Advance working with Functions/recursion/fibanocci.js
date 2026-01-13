// iterative

var fib = function(n) {
    const fib = [0,1];

    for(let i=2;i<=n;i++){
        fib[i] = fib[i-1]+fib[i-2]
    }
    return fib[n]
};

// recursive

var fibReverse = function(n){
    if(n<2){
        return n;
    }
    return fibReverse(n-1)+fibReverse(n-2)
}

console.log(fibReverse(3))