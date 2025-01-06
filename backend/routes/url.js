const express= require('express');
const { handleGenerateNewShortURL, handleRedirectURL, handleGetAnalytics, handleGetURL } = require('../controllers/url');
const Authorization = require('../middleware/auth');

const router = express.Router();

router.post('/',Authorization,handleGenerateNewShortURL);

router.get('/:shortid',handleRedirectURL);

router.get('/analytics/record',Authorization, handleGetAnalytics);

router.get('/analytics/allurls',Authorization,handleGetURL);

module.exports = router;