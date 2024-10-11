const mongoose = require('mongoose')
//TODO import models 


async function configDatabse(app) {

    //TODO set database name (now is exam-db - chage to what you need )

    const conectionString = 'mongodb://localhost:27017/exam-db'

    await mongoose.connect(conectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Database connected');


}


module.exports = { configDatabse }