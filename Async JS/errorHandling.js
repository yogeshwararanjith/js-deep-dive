// function steps(){
//     return Promise.resolve('A')
//     .then(result=>{
//         throw new Error("fail at B")
//     })
//     .then(result=>{
//         return Promise.resolve('C')
//     })
//     .catch(console.log)
// }

steps()

function step1() { return Promise.resolve("A"); }
function step2() { throw new Error("fail at B"); }
function step3() { return Promise.resolve("C"); }

function Steps(){
    step1()
    .then(step2)
    .then(step3)
    .catch(console.log)
}


// recover from an error and continue the chain

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('done'),1000)
    })
}

function processData(){
    return Promise.reject('error');
}

getData()
  .then(processData)
  .catch(() => "default")
  .then(console.log);