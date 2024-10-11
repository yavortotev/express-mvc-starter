const mongoose = require('mongoose')

require('../models/User')
require('../models/Data') // import real data model
//TODO import more models  


async function configDatabse(app) {

    //TODO set database name (now is exam-db - chage to what you need )

    const conectionString = 'mongodb://localhost:27017/exam-db'

    await mongoose.connect(conectionString);

    console.log('Database connected');


}


module.exports = { configDatabse }