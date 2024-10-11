const { Router } = require("express");

const homeRouter = Router()

homeRouter.get('/', (req,res) => {

    console.log(req.user);

    res.render('home')
    

})


module.exports = { homeRouter }