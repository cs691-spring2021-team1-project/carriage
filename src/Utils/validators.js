import {Const} from '../../constants/index';
import { Alert } from 'react-native';

const errorAlert = (title, msg) => {
    return Alert.alert(
       title,
       msg,
           [
               {
               text: "OK",
               onPress: () => console.log("OK Pressed"),
               style: "cancel"
               },
           ]
   );
}

const updateFieldValidator = (input) => {
   if (input === "") {
      console.log(input);
      return false;
   }
   if (input.length > 20) {
      errorAlert("Invalid Input" , "Text limit exceeded");
      return false;
   }
   if (input.match(Const.specialCharacters) || input.includes(" ")) {
      errorAlert("Invalid Input" , "Special characters not allowed");
      return false;
   }

   return true;
}

const basicValidator = (input) => {
    if (!input) {
       errorAlert("Invalid Input" , "Please fill all mandatory fields");
       console.log(input);
       return false;
    }
    if (input.length > 20) {
       errorAlert("Invalid Input" , "Text limit exceeded");
       return false;
    }
    if (input.match(Const.specialCharacters) || input.includes(" ")) {
       errorAlert("Invalid Input" , "Special characters not allowed");
       return false;
    }

    return true;
}

const emailValidator = (email) => {
   if (!email) {
       errorAlert("Invalid Input" , "Please fill all mandatory fields")
       console.log("email");
       console.log(email)
       return false;
   }

   else if (email.length > 320) {
      errorAlert("Invalid Input" , "Email exceeds 320 size limit")
      return false;
   }

   else if (!email.includes('@')) {
      errorAlert("Invalid Input" , "Not a valid email address, missing @")
      return false;
   }
   
   else if (!email.match(Const.mailformat)) {
       errorAlert("Invalid Input", "Not a valid Email Please Check Again")
       return false;
   }

   return true;
}

const passwordValidator = (password) => {
   if (!password) {
       errorAlert("Invalid Input" , "Please fill all mandatory fields")
       return false;
   }

   else if (password.length < 12) {
      errorAlert("Invalid Input" , "Please provide a longer password")
      return false;
   }

   else if (Const.commonPasswords.includes(password)) {
      errorAlert("Invalid Input" , "Please Choose a Stronger Password")
      return false;
   }

   return true;
}

export {updateFieldValidator, basicValidator, emailValidator, passwordValidator}