const Users = require('../models/UserModel');
const bcrypt = require("bcrypt");

const signUpCtrl = async (req, res) => {
    const { fullName, email, password, phoneNumber } = req.body
    //check if there's a request body
    if (
      !req?.body?.fullName ||
      !req?.body?.email ||
      !req?.body?.password ||
      !req?.body?.phoneNumber
    ) {
      return res.status(400).json({ message: "User details required" });
    }
   try {
     //check if the user exists in the database
     const existingUser = await Users.findOne({ email });
     if (existingUser) {
        return res.status(409).json({ message: 'User already exists in the database' })
     }
     //encode the password
     const hashedPassword = await bcrypt.hash(password, 10);

     //store the new user in the database
     const newUser =  await Users.create({
        fullName: fullName,
        email: email,
        password: hashedPassword,
        phoneNumber: phoneNumber
     })
     return res.status(200).json(newUser);
   } catch (err) {
    res.status(500).json({ message: err.message });
   }
}


   const loginCtrl = async (req, res) => {
     //check if there's a request body
     const { email, password } = req.body;
     if (!req?.body?.email || !req?.body?.password ) {
       return res.status(400).json({ message: "User details required" });
     }
     try {
       //check if the user exist in the database
       const foundUser = await Users.findOne({ email });
       if (!foundUser) {
         return res.status(404).json({ message: "User does not exist" });
       }
       //compare the passwords
       const matchedPassword = await bcrypt.compare(
         password,
         foundUser.password
       );
       //grant access if the passwords match
       if (matchedPassword) {
         return res.status(200).json(foundUser);
       } else {
         return res.status(401).json({ message: "Incorrect password" });
       }
     } catch (err)  {
        res.status(500).json({ message: err.message })
     }
   }

module.exports = { signUpCtrl, loginCtrl };