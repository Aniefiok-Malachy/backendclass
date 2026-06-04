//Data fetching
async function fetchUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data = await response.json();
    console.log(data);
}
fetchUser();


const myPromise = new Promise((resolve)=>{
    resolve('This is an async await function...')
});
async function getData(){
    const result = await myPromise;
    console.log('Async Await Result:', result)
}
getData();


function divideFn(a,b){
    return new Promise((resolve, reject)=>{
        if(b===0){
            reject("Undefined Error!!!");
        }
        else{
            resolve(a/b);
        }
    })
}

//By Using .then and .catch
// divideFn(10, 20)
//     .then((result)=>{
//         console.log("The value of a divided by b is:", result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

//Using Async Await
async function divide(){
    try{
        const result = await divideFn(10,2);
        console.log('Value:', result);
    }
    catch(error){
        console.log(error)
    }
}

divide();

const loginPromise = new Promise((resolve, reject)=>{
    let success = false;
    if(success){
        resolve('You have successfully login.. congrates');
    }
    else{
        reject("Login failed😪. \nKindly try again.");
    }
});

async function login(){
    try{
        const result1 = await divideFn(20,2);
        console.log('Value from multiple await:::', result1);

        const result = await loginPromise;
        console.log(result);
        
    }
    catch(error){
        console.log(error);
    }
}

login();