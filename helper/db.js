import mongoose from "mongoose";
const { Schema } = mongoose;

export const connectDB = async () => {
   mongoose.connect( process.env.MONGODB_URI );
   console.log( "Connection Established!" )
}

