const mongoose = require('mongoose');

const URI = "mongodb+srv://yatendrayadav2832:yatendra@cluster0.ldyncxi.mongodb.net/Hostel_Management?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("Connection Successful to DB");
        
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0);
    }
}

module.exports = connectDB;