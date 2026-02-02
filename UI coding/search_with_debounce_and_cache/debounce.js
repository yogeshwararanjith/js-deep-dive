console.log('script loaded')

let input = document.forms.search;

let searchElement = input.elements.search;

let debouncedSearch = debounce(1000);

let filteredUser = [];

// attaching listener for user input

searchElement.addEventListener('input',function(event){
    const typedValue = event.target.value; // Access the current input value
    debouncedSearch(typedValue)
});

function debounce(ms){
    let timeout;
    let cache = new Map();
    return function(typedValue){
        if(cache.has(typedValue)){
             displayResults(cache.get(typedValue));
             return;
        }
        // console.log("timeout",timeout)
        clearTimeout(timeout);
        timeout = setTimeout(async ()=>{
            let result = await filterUsers(typedValue);
            cache.set(typedValue,result);
            displayResults(result);
        },ms)
    }
}

async function getUsers(){
    let res = await fetch('https://dummyjson.com/users');
    if(res.status == 200){
    let users = await res.json();
    return users;
    }else{
        throw new Error('Error',res.status);
    }
}

function filterUsers(typedValue){
    return getUsers().then(res => {
         filteredUser = res.users.filter(it => {
           return it.firstName.toLowerCase().includes(typedValue.toLowerCase()) || 
                   it.lastName.toLowerCase().includes(typedValue.toLowerCase());
            });
            return filteredUser;
        })
    }

function displayResults(results){
    console.log('results',results);
    let cardDiv = document.querySelector('.card')
    // Clear previous results
    cardDiv.innerHTML = '';

    if(results.length == 0){
        cardDiv.innerHTML = 'No users found';
        return;
    }

    results.forEach(user=>{
        let userCard = document.createElement('div')
        userCard.className = 'user-card';
        userCard.innerHTML = `
        <h3>${user.firstName} ${user.lastName}</h3>
        `
        cardDiv.appendChild(userCard);
    })
}