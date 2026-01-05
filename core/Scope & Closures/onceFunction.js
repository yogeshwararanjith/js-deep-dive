const init = once(() => {
  console.log("Initialized");
  return 42;
});

function once(fn){
    let called = false;
    let result;
    return function(){
        if(!called){
            result = fn();
            called = true;
        }
        console.log("result:",result)
        return result;
    }
}

console.log(init)
console.log(init())
console.log(init())


const initializeApp = onceWithArgs((config) => {
  console.log(`App initialized with config: ${config}`);
  return "Initialization Complete";
})

function onceWithArgs(fn){
    let called = false;
    let result;
    return function(...args){
        if(!called){
            result = fn.apply(this,args)
            called = true;
        }
        return result;
    }
}


console.log(initializeApp("Primary Config")); // Output: App initialized with config: Primary Config; returns "Initialization Complete"
console.log(initializeApp("Secondary Config")); // Output: returns "Initialization Complete" (function logic is not re-run)
console.log(initializeApp("Third Config")); 



