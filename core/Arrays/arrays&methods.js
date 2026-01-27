let fruits = ["Apple", "Orange", "Pear"];


fruits.pop()
console.log(fruits)
console.log(fruits.push("kiwi"))
console.log(fruits)

console.log(fruits.shift())
console.log(fruits)

console.log(fruits.unshift('Apple'))


let arr = [1,2,4]

console.log(arr.toString())

console.log([1,2,4] == [1,2,4])

let arrb = arr;

console.log(arr === arrb)


let arrc = ["I", "study", "JavaScript", "right", "now"];

console.log(arrc.splice(1,1,"learn"))
console.log(arrc)




//output

// [ 'Apple', 'Orange' ]
// 3
// [ 'Apple', 'Orange', 'kiwi' ]
// Apple
// [ 'Orange', 'kiwi' ]
// 3
// 1,2,4
// false
// true
// [ 'study' ]
// [ 'I', 'learn', 'JavaScript', 'right', 'now' ]
