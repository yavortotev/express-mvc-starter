const express = require('express');
const { configDatabse } = require('./config/configDatabase');
const { configExpress } = require('./config/confiqExperss');
const { configHbs } = require('./config/configHbs');
const { configRoutes } = require('./config/configRoutes');
const { register, login } = require('./services/userService');
const { createToken, verifyToken } = require('./services/jwt');

start()

async function start() {

    const app = express()

    await configDatabse()
    configHbs(app)
    configExpress(app)
    configRoutes(app)

    app.listen(3000, () => {
        console.log('Server started http://localhost:3000')
        //testFunction()
    });
    

}




async function testFunction() {


    try {
        const result = await login('Joxhn','123456')
        
        console.log(result);

        const token = createToken(result)
        
        console.log(`token: ${token}`);

        const pareData = verifyToken(token)

        console.log(pareData );
        
        

    } catch (error) {
        console.log('Error');
        console.log(error.message);          
        
    }     
}