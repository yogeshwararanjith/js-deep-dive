// set interval with nested time outs
function nestedTimeout(callName){
    let i = 0;
    let timerId = setTimeout(function callback(){
        ++i;
        callName(i);
        timerId = setTimeout(callback,1000)
    },1000)
}


nestedTimeout(function name(i){
    console.log("Ranjith",i)
})

