const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const app= require('./app')

//app.use(bodyParser.urlencoded({ extended: false }))
const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

//mongoose.connect(process.env.LOCAL_DB,...)
mongoose.connect(DB,{
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false,
useUnifiedTopology: true 
}).then(()=>console.log('DB connection Success')).catch(err=>console.log(err))

const port= process.env.PORT || 8000;
const server= app.listen(port,()=>{
    console.log(`listening to port ${port}`)
}) 
