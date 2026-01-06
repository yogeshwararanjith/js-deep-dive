let users = [{name:'jhon',id:1,job:'devloper',address:'4-90, donthi'},
    {name:'mike',id:2,job:'devops',address:'4-91, donthi'},
    {name:'marsh',id:1,job:'UI dev',address:'4-92, donthi'},
    {name:'mitch',id:1,job:'backend dev',address:'4-93, donthi'},
    {name:'shawn',id:1,job:'cloud eng',address:'4-94, donthi'}
]


let newUsers = users.map((u,idx) =>{
   return (u.job === 'UI dev') ?  {...u,status:'Inactive'} : {...u, status:'Active'}
})

let newUsers1 = users.map((u,idx) => u)
// console.log(users == newUsers1)
// console.log(newUsers)
// console.log(users)


//using reduce

let newUsersWithReduce = users.reduce((acc,u)=>{
    (u.job === 'UI dev') ? acc.push({...u,status:'Inactive'}) : acc.push({...u, status:'Active'});
    return acc;
},[])

console.log(newUsersWithReduce)

console.log(Object.entries(users))