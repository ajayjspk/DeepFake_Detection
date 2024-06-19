const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');

const app=express()

app.use(cors());
app.use(bodyParser.json());

// Database connection
const connectdb = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://techlogicak2:WWAnmLLTYWRMfcVM@cluster0.yfatjjp.mongodb.net/"
        // "mongodb+srv://techlogicak2:xWOuWrF1h1VnRYiz@cluster0.73nnsgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      );
      console.log("mongodb connected");
    } catch (err) {
      console.log(err);
    }
  };
  connectdb();

// Define a User schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name:{type:String , required:true},
    password: { type: String, required: true }, // Note: Store hashed passwords in production!
  });
  
  const User = mongoose.model('User', userSchema);

  // app.get("/", verifyUser, (req, res) => {
  //   return res.json({ Status: "Success", name: req.name });
  // });


// Registration endpoint
app.post('/register', async (req, res) => {
    const { email, name, password } = req.body;
  
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      // Create new user
      const newUser = new User({email,name, password });
      await newUser.save();
  
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  // app.post("/login", async (req, res) => {
  //   const { email, password } = req.body;
  //   // console.log(email+" "+password);
  //   try {
  //     // Find the user by email
  //     const user = await User.findOne({ email });
  
  //     if (!user) {
  //       return res.status(400).json({ message: "User not found" });
  //     }
  
  //     // Compare passwords
  //   //   const passwordMatch = await compare(password, user.password);
  //   //   const passwordMatch = await bcrypt.compare(password, user.password);
  //     // console.log(passwordMatch);
  
  //     if (password!= user.password) {
  //       return res.status(401).json({ message: "Incorrect password" });
  //     }
  
  //     // Password is correct, generate JWT token
  //     const token = jwt.sign(
  //       { email: user.email },
  //       "our-jsonwebtoken-secret-key",
  //       {
  //         expiresIn: "1d", // Token expires in 1 day
  //       }
  //     );
  
  //     // Send the token as a cookie
  //     res.cookie("token", token, {
  //       httpOnly: true,
  //       sameSite: "strict",
  //       maxAge: 3600000, // 1 hour in milliseconds
  //     });
  //     return res.status(200).json({ Status: "Success" });
  //     res.status(200).json({ message: "Login successful" });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // });




app.get('/hello',(req,res)=>{
    res.send("hello")
})




app.listen(4000,()=>{
    console.log('server is running')
})