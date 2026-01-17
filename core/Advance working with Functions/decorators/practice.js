// problem 1

const user = {
  name: "Ranjith",
  sayName() {
    return this.name;
  }
};


function forwardingDecorator(func){
    return function(){
    let result = func.call(this)
    return result;
    }
}

user.sayName = forwardingDecorator(user.sayName);
console.log(user.sayName())


function forwardingDecoratorBind(func, object){
    let bindingCall = func.bind(object);
    return function(){
        return bindingCall()
    }
}

user.sayName = forwardingDecoratorBind(user.sayName, user)
console.log(user.sayName())



// problem 2

const car = {
  brand: "Toyota"
};

function printBrand() {
  console.log(this.brand);
}


printBrand.call(car)

