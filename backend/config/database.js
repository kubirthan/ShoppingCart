const mongoose = require('mongoose')

const connectdatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI).then(con=>{
        console.log(`MongoDb is connected to the host: ${con.connection.host} `);
    }).catch((err)=> {
        console.log(err);
    })
}

module.exports = connectdatabase