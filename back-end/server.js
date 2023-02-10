const mongoose = require('mongoose')
const app = require('./app')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

// connecting DB
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
}).then(() => {
    console.log('DB connected')
})




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})