const mongoose = require('mongoose'),
      logger = require('../../app/util/logger');

class Db {
    constructor(){}
    connectToDB(){
        logger.info(`connecting to ${process.env.MONGO_DB_CONNECTION_STR}`)
            mongoose.connect(process.env.MONGO_DB_CONNECTION_STR, { useNewUrlParser: true });
    }
    
    disconnect(){
        logger.info(`disconnect from ${process.env.MONGO_DB_CONNECTION_STR}`)
        mongoose.disconnect(d =>{
            if(d.error){
                logger.error('mongoose.disconnect err:', d.error);
            }
           
        })
    }
}

module.exports = Db;