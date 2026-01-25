// Create your own Promise

function wait(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("done"),ms)
    })
}

wait(1000).then((result)=>{console.log(result,"1 second passed")})


// Resolve vs Reject

function divide(a,b){
    return new Promise((resolve, reject)=>{
        if(b !== 0){
            resolve(a/b)
        }
        reject(new Error("error"))
    })
}

// console.log(divide(10,2))
divide(10,2).then((result)=>console.log(result)).catch((error)=>console.log(error));
divide(10,0).then((result)=>console.log(result)).catch((error)=>console.log(error));