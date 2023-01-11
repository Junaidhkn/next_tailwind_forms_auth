import { hashPassword } from "../../../helper/auth.js";
import { connectDB } from "../../../helper/db.js";
import User from "../../../helper/db.js";

export default async function handler ( req, res ) {
   console.log( User )
   await connectDB()
   const data = req.body

   const { name, email, password } = data;

   if ( !name || !email || !email.includes( '@' ) || !password || password.trim().length < 3 ) {
      res.status( 422 ).json( {
         message: 'Invalid Input, Please use Valid input'
      } )
      return;
   }
   const saltedPassword = hashPassword( password )

   const newUser = { name: name, email: email, password: saltedPassword }

   try {
      const user = JSON.stringify( newUser )
      res.json( user );
   } catch ( err ) {
      res.status( 500 ).json( err );
   }
}
