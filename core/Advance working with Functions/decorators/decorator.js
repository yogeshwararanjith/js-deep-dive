function slow(x) {
  console.log(`Called with ${x}`);
  return x;
}

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // scary CPU-heavy task here
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  },

  // for multiple args

  fast(x,y,z){
    console.log("called with" + x,y,z)
    return (x+y+z)*this.someMethod();
    }

};

// this will be lost here 
// let call = worker.slow;
// console.log(call(2))
// console.log(call(2))


function cachingDecorator(func){
    let cache = new Map();

     return function(x){
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);
        cache.set(x,result)
        return result;
    }
}

// worker.slow = cachingDecorator(worker.slow)
// console.log(worker.slow(3))


// forwarding 'call' with this  

function cachingDecoratorThis(func){
    let cache = new Map();

    return function(x){
        if(cache.has(x)){
            return cache.get(x);
        }

        let result = func.apply(this,x);
        cache.set(x,result);
        return result;
    }
}


worker.slow = cachingDecoratorThis(worker.slow);
console.log(worker.slow(3));
console.log(worker.slow(3));


// with apply

function cachingDecoratorApply(func){
    let cache = new Map();

    return function(...args){
        let key = JSON.stringify(args)
        if(cache.has(key)){
            return cache.get(key)
        }
        let result = func.apply(this,args)
        cache.set(key,result)
        return result;
    }
}

worker.fast = cachingDecoratorApply(worker.fast)

console.log(worker.fast(2,2,2))
console.log(worker.fast(2,2,2))

