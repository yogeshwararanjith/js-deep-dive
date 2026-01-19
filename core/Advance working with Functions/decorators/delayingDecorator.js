// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

function f(x) {
  console.log(x);
}

function delayDecorator(func,time){
    return function(...args){
        setTimeout(()=>{
            func.apply(this,args)
        },time)
    }
}

let f1000 = delayDecorator(f, 1000);
let f2000 = delayDecorator(f, 2000);

f1000("test")
f2000("test1")