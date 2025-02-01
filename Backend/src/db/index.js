import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`);
        console.log("Mongodb connect successfully :)");
        
    } catch (error) {
        console.error(`Mongodb Connection Error: ${error.message}`);
        process.exit(1);        
    }
};