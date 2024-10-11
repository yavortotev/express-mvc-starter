const express = require('express');
const { configDatabse } = require('./config/configDatabase');
const { configExpress } = require('./config/confiqExperss');
const { configHbs } = require('./config/configHbs');
const { configRoutes } = require('./config/configRoutes');
const { register } = require('./services/userService');

start()

async function start() {

    const app = express()

    await configDatabse()
    configHbs(app)
    configExpress(app)
    configRoutes(app)

    app.listen(3000, () => {
        console.log('Server started http://localhost:3000')
        testFunction()
    });
    

}




async function testFunction(params) {


    try {
        const result = await register('anna','123456')
        console.log(result);
    } catch (error) {
        console.log('Error');
        console.log(error.message);          
        
    }     
}