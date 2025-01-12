const express = require('express');
const urlRoute = require("./routes/url");
const { connectMongoDB } = require('./connect');
const URL = require('./models/url');
const path = require('path');
const cors = require('cors');
// const staticRoute = require('./routes/StaticRouter');
const userRoute = require('./routes/user');
require('dotenv').config();

const app= express();
const port= 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectMongoDB('mongodb://localhost:27017/short-url').then(()=>{
    console.log("DB Connected");
})

// app.set('view engine','ejs');
// app.set('views',path.resolve('./views'));

// app.get('/test',async (req,res) => {
//     const allURLs = await URL.find({});
//     return res.render('home',{
//         urls: allURLs,
//     });
// })



app.use('/url',urlRoute);
app.use('/user',userRoute);
// app.use('/',staticRoute);

app.listen(port, ()=> console.log(`Server started at port ${port}`));