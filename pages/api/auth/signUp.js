import { hashPassword } from "../../../helper/auth.js";
import { connectDB, User } from "../../../helper/db.js";

export default function handler ( req, res ) {
   connectDB()
   const data = req.body

   const { name, email, password } = data;

   if ( !name || !email || !email.includes( '@' ) || !password || password.trim().length < 3 ) {
      res.status( 422 ).json( {
         message: 'Invalid Input, Please use Valid input'
      } )
      return;
   }
   const saltedPassword = hashPassword( password )

   const newUser = new User( { name, email, password: saltedPassword } )


}
