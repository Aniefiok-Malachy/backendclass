const express = require('express');
const app = express();

app.use(express.json());

app.use('/', (req, res, next)=>{
    console.log(`User visited ${req.url}`);

    next();
});

app.get('/',(req, res)=>{
    res.send('Welcome Home');
})

app.get('/about', (req, res)=>{
    res.send('Welcome to About Page')
    
});

app.get('/contact', (req, res)=>{
    res.send('Welcome to the Contact Page')
   
});

const users = [
    {
        id: 1,
        name: 'Malachy',
        age: 28,
        title: 'BD'
    },
    {
        id: 2,
        name: 'John',
        age: 25,
        title: 'BoD'
    },
    {
        id: 3,
        name: 'Uduak',
        age: 27,
        title: 'mod'
    }
];

app.get('/user', (req, res) => {
    res.json(users);
});


app.get('/user/:id', (req, res) => {

    const user = users.find(
        item => item.id === Number(req.params.id)
    );

    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({
            message: "User not found! Please try a different user ID"
        });
    }

});
//Add new users
app.post('/add',(req, res)=>{
    const newUser={
        id:users.length+1,
        title:`User ${users.length+1}`
    }
    users.push(newUser);
    res.status(200).json({
        data: newUser,
        message: " New User Added Succesfully"
    })
})

//UPDATE USERS
app.put('/update/:id', (req, res)=>{
    const findCurrentUser = users.find(
        useritem =>useritem.id === Number(req.params.id));
    if(findCurrentUser){
        findCurrentUser.title = req.body?.title || findCurrentUser.title;
        findCurrentUser.name = req.body?.name || findCurrentUser.name;
        findCurrentUser.age = req.body?.age || findCurrentUser.age;

        res.status(200).json({
            message: `User with the ID ${req.params.id} is updated successfully.`,
            data: findCurrentUser
        })
    }else {
        res.status(404).json({
            message: `User with the ID ${req.params.id} is not found, please try another ID.`
        })
    }
})

app.get('/search', (req, res)=>{
    // res.send(req.query.age);
    res.send(req.query.name);
})

app.listen(3000, ()=>{
    console.log('Server is running on Port 3000')
});

//Delete 
app.delete('/delete/:id', (req, res) => {

    const userIndex = users.findIndex(
        user => user.id === Number(req.params.id)
    );

    if (userIndex !== -1) {

        const deletedUser = users.splice(userIndex, 1);

        res.status(200).json({
            message: `User with ID ${req.params.id} deleted successfully.`,
            data: deletedUser[0]
        });

    } else {

        res.status(404).json({
            message: `User with ID ${req.params.id} not found.`
        });

    }

});