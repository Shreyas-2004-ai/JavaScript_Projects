//Random Password Generater

function generatePassword(length,includeLowercase,includeUppercase,inlcudeNumbers,includeSumbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChars = "!@#$%^&*()_+=-";
    const numberChars = "0123456789";
   
    let allowedChars ="";
    let passward = "";
    
    allowedChars +=includeLowercase ? lowercaseChars : "";
    allowedChars +=includeUppercase ? uppercaseChars : "";
    allowedChars +=inlcudeNumbers ? numberChars : "";
    allowedChars += includeSumbols ? symbolChars : "";


    console.log(allowedChars);
    return ' ';
}





const passwordLength =12;
const includeLowercase = true;
const includeUppercase =true;
const inlcudeNumbers = true;
const includeSumbols =true;

const password =generatePassword(passwordLength,includeLowercase,includeUppercase,includeSumbols);

console.log(`Generated password: ${password}`);