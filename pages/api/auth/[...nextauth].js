import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../model/User.js";
import { connectDB } from "../../../helper/db.js";
import { compare } from 'bcryptjs';

export default NextAuth( {
   providers: [
      GoogleProvider( {
         clientId: process.env.GOOGLE_ID,
         clientSecret: process.env.GOOGLE_SECRET
      } ),
      CredentialsProvider( {
         name: "Credentials",
         async authorize ( credentials, req ) {
            await connectDB().catch( error => { error: "Connection Failed...!" } )

            // check user existance
            const result = await User.findOne( { email: credentials.email } )
            if ( !result ) {
               throw new Error( "No user Found with Email Please Sign Up...!" )
            }

            // compare()
            const checkPassword = await compare( credentials.password, result.password );

            // incorrect password
            if ( !checkPassword || result.email !== credentials.email ) {
               throw new Error( "Username or Password doesn't match" );
            }

            return result;

         }
      } )
   ],
   secret: process.env.JWT_SECRET,
   session: {
      strategy: 'jwt',
   }
} )