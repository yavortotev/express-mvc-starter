const express = require('express');
const { configDatabse } = require('./config/configDatabase');
const { configExpress } = require('./config/confiqExperss');
const { configHbs } = require('./config/configHbs');
const { configRoutes } = require('./config/configRoutes');

start()

async function start() {

    const app = express()

    await configDatabse()
    configHbs(app)
    configExpress(app)
    configRoutes(app)
       
}


app.listen(3000, ()=>console.log('Server started http://localhost:3000'));
