const {nanoid} = require('nanoid');
const URL = require('../models/url');
const USER = require('../models/user');

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({ error: 'url is required!!!'});
    const shortID = nanoid(8);

    const user_obj_ID = req.user;

    const newURL = await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitedHistory: [],
        CreatedBy : user_obj_ID,
    });

    return res.status(201).json({obj_id: newURL,id: shortID,redirectURL});
    // return res.render("home",{ id: shortID });
}

async function handleRedirectURL(req,res){
    const shortID = req.params.shortid;
    console.log("shortid:",shortID);
    const entry = await URL.findOneAndUpdate({
        shortID,
    },  
    {
        $push : {
            visitedHistory: {
                timestamp: Date.now(),
            },
        },
    });
    // console.log(entry);
    if(!entry)return res.status(401).json({msg: "Wrong shortID used"});
    return res.redirect(entry.redirectURL);
}

async function handleGetAnalytics(req,res){
    const user_obj_ID = req.user;
    const data = await URL.find({CreatedBy: user_obj_ID});
    
    const result = data.flatMap((item) => {
        return item.visitedHistory.map((history) => ({
          timestamp: history.timestamp,
          shortID: item.shortID,
          redirectURL: item.redirectURL,
        }));
    });

    return res.json({analytics: result});
}
async function handleGetURL(req,res){
    const user_obj_ID = req.user;
    const result = await URL.find({CreatedBy: user_obj_ID},'-visitedHistory');// Excluding VisitedHistory
    return res.json({analytics: result});
}

module.exports = {
    handleGenerateNewShortURL,
    handleRedirectURL,
    handleGetAnalytics,
    handleGetURL
};