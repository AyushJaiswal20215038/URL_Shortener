const jwt = require('jsonwebtoken');

function Authorization(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if(!token)res.status(401).json({msg: "Token not received"});

    jwt.verify(token,process.env.SECRET_KEY,(err , user)=>{
        if(err)return res.status(403).json({msg: "Invalid token"});

        req.user = user.user_id;
        // return res.json();
        next();
    });

    // return res.status(200).json({msg:"Auth reached"});
}

module.exports = Authorization ;