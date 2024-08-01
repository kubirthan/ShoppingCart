const app = require('./app')
const dotenv = require('dotenv')
const path = require('path')
const connectdatabase = require('./config/database')

dotenv.config({path:path.join(__dirname,"config/config.env")})

connectdatabase()

app.listen(process.env.PORT, ()=> {
    console.log(`server listining to the port: ${process.env.PORT} in ${process.env.NODE_ENV}`);
})