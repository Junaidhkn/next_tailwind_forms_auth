import mongoose from "mongoose";
const { Schema } = mongoose;

export const connectDB = async () => {
   mongoose.connect( process.env.MONGODB_URI );
   console.log( "Connection Established!" )
}


const userSchema = new Schema( {
   name: String,
   email: String,
   password: String
} );
export const User = mongoose.model( 'User', userSchema );