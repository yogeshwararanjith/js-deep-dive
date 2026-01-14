let company = { 
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// finding the sum of salaries recursive approach

function sumSalaries(department){

    if(Array.isArray(department)){
        return department.reduce((acc,it)=>acc+it.salary,0);
    } else{
        let sum = 0;
        for(let value of Object.values(department)){
            sum += sumSalaries(value)
            console.log("sum",sum)
        }
        return sum;
    }   
    
}

console.log(sumSalaries(company))