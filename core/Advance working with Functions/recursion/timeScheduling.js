// implementing setInterval with setTimeout

// let timerId = setTimeout(function tick(){
//     console.log('tick')
//     timerId = setTimeout(tick,1000)
// },1000)

// output every second

function printNumbers(from, to){
    let count = from;
    let timerId = setTimeout(function printNums(){
        console.log(count)
        if(count < to){
            count++;
            timerId = setTimeout(printNums,1000)
        }
    },1000)
}

printNumbers(1,5)

// using setInterval

function printNumbersWithInterval(from, to){
    let count = from;

    let timerId = setInterval(function printNums(){
        console.log(count)
        if(count === to){
            clearInterval(timerId)
        }
        count++
    },1000)
}




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
