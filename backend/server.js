const express  = require('express')
const signup = require('./models/signUpSchema');
const mdb = require("mongoose");
const cors = require("cors")
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const port = 5000;
    
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

mdb.connect(process.env.MONGODB_URL)
.then(() => console.log("mongobd connected successfully"))
.catch((error) => console.log("unable to connect due to ", error));

app.get('/', (req, res) => {
    res.status(200).json({"status": 200});
});

app.post('/signup', async(req, res) => {
    try{
        const {userName, emailId, password} = req.body; 
        const hashedPass = await bcrypt.hash(password, 10);

        const newuser = new signup({
            userName: userName,
            emailId: emailId,
            password: hashedPass, 
        });
        await newuser.save();
        res.status(200).json({message: "you are a part of scholarscout", isSignUp: true});
    } catch(error) {
        res.status(500).json({message: "something went wrong, please fill it properly", isSignUp: false});
    }
});

app.post('/login',async (req, res) => {
    try{
        const{emailId, password} = req.body;
        const existingUser = await signup.findOne({emailId: emailId});

        if(existingUser){
            const isValidPassword = await bcrypt.compare(password, existingUser.password);

            if(isValidPassword){
                res.status(200).json({message:"Welcome back to scholarscout", isLoggedIn: true});
            }else{
                res.status(200).json({message:"I think you forgot your secret key", isLoggedIn: false});
            }
        }else{
            res.status(200).json({message: "we could not recognize you!!",isLoggedIn: false});
        }
    }catch(error){
        res.status(200).json({message: "you need to fill it properly", isLoggedIn:falseres});
    }
});

app.listen(port, ()=> console.log("server started successfully"));

