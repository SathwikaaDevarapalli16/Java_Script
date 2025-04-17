function generatepassword(length, includeLowercase, includeUppercase, includeSymbols, includeNumbers){

    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolchars = "!@#$%^&*_-+=";
    let password = "";
    let allowedchars = "";

    allowedchars+= includeLowercase ? lowercasechars : "";
    allowedchars+= includeUppercase ? uppercasechars : "";
    allowedchars+= includeSymbols ? symbolchars : "";
    allowedchars+= includeNumbers ? numberchars : "";
    
    if(length <= 0){
        return `(password length must be atleast 1)`;
    }
    if(allowedchars.length === 0){
        return `(Atleast one set of charecters neeed to be selected)`;
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];


    }
    return password;

}
const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeSymbols = true;
const includeNumbers = true;

const password = generatepassword(passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeSymbols,
                                includeNumbers
);
console.log(`Generated password: ${password}`);