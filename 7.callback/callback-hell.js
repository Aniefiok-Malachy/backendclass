const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log(data);

    const modifydata = data.toUpperCase();
    fs.writeFile('output.txt', modifydata, (err)=>{
        if(err) throw err;
        console.log('File has been modified!!!');
        fs.readFile('output.txt', 'utf8',(err, data)=>{
            if(err){
                console.error('Show error:', err);
                return;
            }
            console.log('Updated data:', data)
        });
    });
});