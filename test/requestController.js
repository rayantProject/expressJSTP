const express = require('express');
const app = express();

const showLogin = (req, res, next) => {
    try {
        const loginPass = req.body.password;
        const loginEmail = req.body.email;
        res.send(loginPass, loginEmail)
        
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    showLogin
}