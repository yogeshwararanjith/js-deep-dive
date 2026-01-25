// Promise.all

// let promise = Promise.all([
//     new Promise((resolve,reject)=>setTimeout(()=>resolve(1),1000)),
//     new Promise((resolve,reject)=>setTimeout(()=>resolve(2),2000))
// ]).then(console.log)


const p1 = function(){
    return new Promise((resolve)=>setTimeout(()=>resolve(1),1000))
}

const p2 = function(){
    return new Promise((resolve)=>setTimeout(()=>resolve(2),2000))
}

const p3 = function(){
    return new Promise((resolve,reject)=>setTimeout(()=>reject('error at p3'),2000))
}

// success case
let result = Promise.all([p1(),p2()]).then(result => console.log('done'));

// error case
let result1 = Promise.all([p1(),p3(),p2()]).then(result => console.log('done'));



// Promise.allSettled

let allSettled = Promise.allSettled([p1(),p3(),p2()]).then(result => console.log(result,'done'))


// polyfill for Promise.allSettled

const rejectHandler = reason => ({ status: 'rejected', reason });
const resolveHandler = value => ({status:'resolved',value})

Promise.allSettled = function(promises){
   const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
    return Promise.all(convertedPromises);
}

