const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome Home')
    console.log('Home Page');
    
});

app.get('/about', (req, res)=>{
    res.send('Welcome to About Page')
    console.log('About Page');
});

app.get('/contact', (req, res)=>{
    res.send('Welcome to the Contact Page')
    console.log('Contact Page');
});

app.get('/user', (req, res)=>{
    res.json({
        name:'Malachy',
        age: 28
    });
});

app.get('/user/:id',(req,res)=>{
    res.send(`User ID:${req.params.id}`);
});

app.get('/search', (req, res)=>{
    // res.send(req.query.age);
    res.send(req.query.name);
})

app.listen(3000, ()=>{
    console.log('Server is running on Port 3000')
});

