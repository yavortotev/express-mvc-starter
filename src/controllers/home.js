const { Router } = require("express");
const { login } = require("../services/userService");
const { createToken } = require("../services/jwt");

const homeRouter = Router()

//TODO replace with real router according to description 
homeRouter.get('/', async (req,res) => {

    

    console.log(req.user);

    //TODO this code create token and save it in a cookie 
    // const result = await login('Joxhn','123456')
    // const token = createToken(result)
    // res.cookie('token', token ,{
    //     httpOnly: true})

    res.render('home')
    

})


module.exports = { homeRouter }