export const validateLogin = ( values ) => {
   const errors = {};
   // Email Validation
   if ( !values.email ) {
      errors.email = 'Required';
   } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) ) {
      errors.email = 'Invalid email address';
   }
   //  Password Validation
   if ( !values.password ) {
      errors.password = 'Required';
   } else if ( values.password.length < 6 || values.password.length > 20 ) {
      errors.password = 'Password must be between 6 to 20 characters long!';
   } else if ( values.password.includes( ' ' ) ) {
      errors.password = 'Invalid Password!';
   }

   return errors;
}
export const validateRegister = ( values ) => {
   const errors = {};
   if ( !values.name ) {
      errors.name = 'Required';
   } else if ( values.name.length > 15 && values.name.length <= 3 ) {
      errors.name = 'Must be greater than 2 and less that 15 characters';
   }

   if ( !values.email ) {
      errors.email = 'Required';
   } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) ) {
      errors.email = 'Invalid email address';
   }
   //  Password Validation
   if ( !values.password ) {
      errors.password = 'Required';
   } else if ( values.password.length < 6 || values.password.length > 20 ) {
      errors.password = 'Password must be between 6 to 20 characters long!';
   } else if ( values.password.includes( ' ' ) ) {
      errors.password = 'Invalid Password!';
   }
   if ( !values.cpassword ) {
      errors.cpassword = 'Required';
   } else if ( values.cpassword !== values.password ) {
      errors.password = "Passwords does not match!";
   }

   return errors;
}