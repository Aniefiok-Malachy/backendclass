const fs = require('fs');
const path = require('path');

//To create a subfolder inside File system
const dataFolder = path.join(__dirname, 'data');
//Checking if the folder exist
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log('Data Folder created');
}

//To create a file inside dataFolder
const filePath = path.join(dataFolder, 'example.txt')
fs.writeFileSync(filePath, "Hello from node.js");
console.log("File created successfully")

//To add to the existing file(Append)
fs.appendFileSync(filePath, "\nThis is a new line added. \nI am learning backend, wish me well.😉")

//To read from file
const contentFile = fs.readFileSync(filePath, 'utf-8');
console.log(`Content{ ${contentFile}}`)

//Async File creation 
const asyncPath = path.join(dataFolder, 'asynce-example.txt');
fs.writeFile(asyncPath, 'This is an async way of writing to a file.\nIt has been an interesting class so far.', (err)=>{
    if(err) throw new err; // the (new ) is optional, you can include it or leave it.
    console.log('Async file created successfully...')
    //Reading from file async
        fs.readFile(asyncPath, 'utf-8',(err, data)=>{
            if(err) throw err;
            console.log('Async Content:', data);
            fs.appendFile(asyncPath, 'This is a new line added to the previous content.\nThe course is going smoothly...\nThanks to my tutor, the explanation is great.', (err)=>{
                if(err) throw err;
                console.log('New content add successfully.')
                fs.readFile(asyncPath, 'utf-8', (err, updatedData)=>{
                    if(err) throw err;
                    console.log('Updated Content:', updatedData);
                })
            })
        });
})

