import mongoose from "mongoose";
const { Schema } = mongoose;

export const connectDB = async () => {
   mongoose.set( 'strictQuery', false );
   try {
      const { connection } = await mongoose.connect( process.env.MONGODB_URI );

      if ( connection.readyState == 1 ) {
         return Promise.resolve( true )
      }
   } catch ( error ) {
      return Promise.reject( error )
   }
}

