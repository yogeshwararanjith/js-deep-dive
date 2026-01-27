
// with async
async function loadJson(url){
    let response = await fetch(url);
    let user = await response.json();
    if(response.status == 200){
        return user;
    }else{
        throw new Error(response.status);
    }
}

loadJson('https://javascript.info/no-such-user.json').catch(console.error)


async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f(){
    return wait().then(console.log)
}

f()