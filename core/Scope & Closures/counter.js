function createCounter(){
    let count = 0;
    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    function getValue(){
        return count;
    }

    return {increment,decrement,getValue}
}


let counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getValue());