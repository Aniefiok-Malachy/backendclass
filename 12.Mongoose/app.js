const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://malaniefiok_db:Mala6252@cluster0.rrvchk7.mongodb.net/'
)
.then(()=>{
    console.log("database connected successfully");
    
})
.catch((e)=> console.log(e));

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActive: Boolean,
    tags:[String],
    createdAt:{type: Date, default: Date.now}
});

//Create A user
const User = mongoose.model("User", userSchema);

async function runQueryExample(){
    try{
        //Create A new Document/ User
        const newUser = await User.create({
            name:"Malchy",
            email:"mala@gmail.com",
            age:28,
            isActive: true,
            tags:["Developer", "Designer"]
        })
        console.log("New user created", newUser);
        const allUsers = await User.find({})
        console.log("Finding all Users", allUsers);
        
        
    }catch(e){
        console.log("Error ->", e);
        
    } finally{
        await mongoose.connection.close()
    }
}

runQueryExample();
