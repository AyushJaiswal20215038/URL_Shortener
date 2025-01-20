const {nanoid} = require('nanoid');
const URL = require('../models/url');
const USER = require('../models/user');

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    console.log('body',body);
    if(!body.url) return res.status(400).json({ error: 'url is required!!!'});
    const shortID = nanoid(8);

    const user_obj_ID = req.user;

    const result = await URL.find({CreatedBy: user_obj_ID},'-visitedHistory').sort({updatedAt: "asc"});
    let deletedURL = "none";
              
    const newURL = await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitedHistory: [],
        CreatedBy : user_obj_ID,
    });
    
    if(result.length>4){
        const Isdeleted = await URL.deleteOne({'_id':result[0]._id});
        if(Isdeleted.acknowledged){
            deletedURL = result[0]._id;
        }
    }  


    return res.status(201).json({newurl:{_id: newURL._id,shortID,redirectURL:body.url},deletedURL});
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
    result.sort((a, b) => b.timestamp - a.timestamp);

    return res.json({logs: result});
}
async function handleGetURL(req,res){
    const user_obj_ID = req.user;
    const result = await URL.find({CreatedBy: user_obj_ID},'-visitedHistory').sort({updatedAt: "desc"});// Excluding VisitedHistory
    return res.json({analytics: result});
}

async function handleDeleteURL(req,res){
    const urlId = req.params.urlID;
    // console.log(urlId);
    const result = await URL.deleteOne({'_id':urlId});
    return res.json({result});
}

module.exports = {
    handleGenerateNewShortURL,
    handleRedirectURL,
    handleGetAnalytics,
    handleGetURL,
    handleDeleteURL,
};