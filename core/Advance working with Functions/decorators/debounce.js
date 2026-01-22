function debounceDecorator(func, ms){
    let timeout;
    return function(...args){
        clearTimeout(timeout)
        timeout = setTimeout(()=>func.apply(this,args),ms)
    }
}   

function keyPress(key){
    console.log(key)
}

let one = debounceDecorator(keyPress, 200)
one('j')
let two = debounceDecorator(keyPress, 500)
two('ja')
let three = debounceDecorator(keyPress,1000)
three('java')
let four = debounceDecorator(keyPress,1500)
four('javascript')
