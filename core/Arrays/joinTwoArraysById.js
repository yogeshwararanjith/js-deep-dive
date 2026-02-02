var join = function(arr1, arr2) {
    let joinedArr = [...arr1];

    for(let item of arr2){
        let findIdx = joinedArr.findIndex(it=>it.id === item.id)
        if(findIdx !== -1){
            joinedArr.splice(findIdx,1,{...joinedArr[findIdx],...item});
        }else{
            joinedArr.push({...item})
        }
    }
    return joinedArr.sort((a,b)=>a.id-b.id);
};

arr1 =
[{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}]
arr2 =
[{"id":2,"o":48,"z":84,"y":61}]

console.log(join(arr1,arr2))