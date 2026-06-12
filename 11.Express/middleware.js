const express = require('express');

const app = express();

//Without Middleware
/*
app.get('/', (req, res)=>{
    console.log(`User visited ${req.url}`);
    res.send("Home Page")
});
app.get('/about', (req, res)=>{
    console.log(`User visited ${req.url}`);
    res.send("About Page")
})
app.get('/contact', (req, res)=>{
    console.log(`User visited ${req.url}`);
    res.send("Contact Page")
})

app.listen(3000, ()=>{
    console.log('Server Running on port 3000')
})
    */


//With Middleware
app.use('/', (req, res, next)=>{
    console.log(`User visited ${req.url}`);
    next();
})

app.get('/', (req, res)=>{
    res.send("Home Page")
});
app.get('/about', (req, res)=>{
    res.send("About Page")
})
app.get('/contact', (req, res)=>{
    res.send("Contact Page")
})


//Note both still give the same result but the differences is that with middleware there is no repetition of:
//    console.log(`User visited ${req.url}`);


//Users Authentication

function auth(req, res, next){
    const loggedIn = true;
    if(!loggedIn){
        res.send('Access Denied');
    };
    next();
}

app.get('/dashboard', (req, res)=>{
    res.send('DASHBOARD');
})
app.get('/profile', (req, res)=>{
    res.send('PROFILE')
})

app.listen(3000, ()=>{
    console.log('Server running on port 3000 with middleware')
})
