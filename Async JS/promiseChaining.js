  // multiply by 2
  // add 3
  // log result


function chain(a){
    return new Promise((resolve, reject)=>{
        resolve(a);
    }).then(result=>{
        // console.log(result)
        return result * 2;
    }).then(result => {
        // console.log(result)
        return result + 3;
    }).then(result => console.log(result))
}

chain(2);

function chainOptimized(a){
    // Don’t wrap a value in new Promise unless you’re converting async work.
    return Promise.resolve(a)
    .then(result => result * 2)
    .then(result => result + 3)
    .then(console.log);
}

chainOptimized(2);


function ayncSquare(a){
    return new Promise(resolve => {
        setTimeout(()=>resolve(a*a),1000)
    })
}

ayncSquare(2).then(result=>ayncSquare(result))
.then(console.log)

