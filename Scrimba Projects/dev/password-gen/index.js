const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let button = document.getElementById("password-btn");

button.addEventListener("click", function() {
    passwordOne.textContent = generateRandomPassword()
    passwordTwo.textContent = generateRandomPassword()
});

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

document.getElementById("password-btn").addEventListener("click", function () {
  const passwordOne = document.getElementById("password-one").innerText;
  const passwordTwo = document.getElementById("password-two").innerText;

  const combinedText = passwordOne + "\n" + passwordTwo;

  navigator.clipboard.writeText(combinedText);
});

console.log("Here is a random password: ", generatedPasswordOne)
console.log("Here is another random password: ", generatedPasswordTwo)
