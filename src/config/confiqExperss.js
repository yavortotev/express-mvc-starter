const express = require('express');
const cookieParser = require('cookie-parser');

const { session } = require('../middlewares/session');

const secret = 'cookie secret'




function configExpress(app) {

    app.use(cookieParser(secret));
    app.use(session())
       //TODO add session middleware  aafter cookie parser and before app.use(./stati....)
    
    app.use('/static', express.static('static'))
    app.use(express.urlencoded({extended: true}))
    
    
}


module.exports = { configExpress }