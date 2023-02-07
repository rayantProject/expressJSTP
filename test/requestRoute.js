
const express = require('express');
const router = express.Router();
const { showLogin } = require('./requestController');



router.get("/req", showLogin)

module.exports = router;