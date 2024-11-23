require("dotenv").config();

const mongoose = require("mongoose")

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB);
     console.log ("conectou no banco")
    
    }catch (error){
        console.error ("erro ao se conectar no banco", error.message)
        process.exit(1)
    }
    
}

module.exports = connectDB