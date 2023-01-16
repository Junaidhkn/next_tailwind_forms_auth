import { connectDB } from "../../../helper/db.js";
import User from "../../../model/User.js";
import { hash } from "bcryptjs";

export default async function handler ( req, res ) {
   await connectDB()
   if ( req.method === 'POST' ) {
      const data = req.body

      const { name, email, password } = data;

      if ( !name || !email || !email.includes( '@' ) || !password || password.trim().length < 3 ) {
         res.status( 422 ).json( {
            message: 'Invalid Input, Please use Valid input'
         } )
         return;
      }
      //   Check User Duplication
      const existingUser = await User.findOne( { email } )
      if ( existingUser ) {
         res.status( 422 ).json( {
            message: 'User already exists!'
         } )
         return;
      }

      const saltedPassword = await hash( password, 12 )

      const newUser = new User( { name: name, email: email, password: saltedPassword } )

      try {
         const user = await newUser.save()
         res.status( 201 ).json( user );
      } catch ( err ) {
         res.status( 500 ).json( err );
      }
   }
}
