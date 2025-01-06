const USER = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function handleSignUp(req,res){
    try {
        const user = req.body;
        if(!user)return res.json({msg: "provide the details"});
        const hashSalt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(user.password,hashSalt);
        await USER.create({
            name: user.name,
            email: user.email,
            password: hashpassword
        });
        return res.status(200).json({msg: "User Added Successfully"});
    } catch (error) {
        return res.status(400).json({error});
    }
};

async function handleSignIn(req,res){
    const user = req.body;
    const ispresent = await USER.findOne({
        email: user.email,
    });
    if(!ispresent)return res.status(401).json({msg: "Not Registered"});
    const checkPassword = await bcrypt.compare(user.password,ispresent.password);
    
    if(!checkPassword)return res.status(401).json({msg : "Incorrect Password"});

    const token = jwt.sign({user_id: ispresent._id},process.env.SECRET_KEY);
    return res.status(200).json({msg: "Signed In Successfully",token});
}


module.exports = {
    handleSignUp,
    handleSignIn
};