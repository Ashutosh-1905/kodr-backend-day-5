const mongoose = require("mongoose");
require("dotenv").config();
const connectToDb = async () => {
    
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully.");
        
    } catch (err) {
        console.log("Datatbase connection error : ", err);
        process.exit(1);
    }
};

module.exports = connectToDb;