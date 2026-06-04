
const dataPromise = new Promise ((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("The Operation was successful, I now understood it..");
    }

    else{
        reject("Operation Failed!");
    }
})

dataPromise
    .then((message)=>{
        console.log(message)
    })
    .catch((error)=>{
        console.log(error)
    })


function divideFn(num1, num2){
    return new Promise((resolve, reject)=>{
        if(num2===0){
            reject("Can't be divided by 0")
        }
        else{
            resolve(num1/num2)
        }
    })
}

divideFn(10,0)
    .then(result=> console.log(result, 'result'))
    .catch(error => console.log(error, 'Undefined'));




const promise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Data Loaded")
    }, 2000);
})

//Without Await
promise.then((data)=>{
    console.log(data)
});



const myPromise = new Promise ((resolve, reject)=>{
    let success = true;
    if (success){
        resolve("Operation went successfully..");
    }

    else{
        reject("Operation gone wrong");
    }
})

myPromise
    .then((msg)=>{
        console.log(msg);
    })
    .catch((err)=>{
        console.log(err)
    })

const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
    .then((mydata)=>{
        console.log(mydata)
    })
    .catch((err)=>{
        console.log(err)
    });
