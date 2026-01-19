// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.
// Every call is saved as an array of arguments.

function spy(func){
    let calls = [];
    function wrapper(...args){
        calls.push(args);
        let result = func.apply(this,args)
        return result
    }
    wrapper.calls = calls;
    return wrapper;
}

function work(a, b) {
  console.log( a + b ); // work is an arbitrary function or method
}


work = spy(work)
console.log(work)
console.log(work(1,2))
console.log(work(2,2))

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}