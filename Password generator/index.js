const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z"];


const generatePass = document.getElementById("btn");
const themeSwitch = document.getElementById("checkbox");
const copyPass = document.getElementById("password");

var whiteTheme = document.getElementById("container");
var pass = document.getElementById("password");
var passLength = document.getElementById("password-value");
var passCopied = document.getElementById("password-copy");
var invalidPass = document.getElementById("invalid-password");

let strongPassword;
let nb = characters.length;
let charNb;
let passValue;


// Switching theme between dark and light

themeSwitch.addEventListener("click", function(){
    if (whiteTheme.classList.contains("white-theme")) {
        whiteTheme.classList.remove("white-theme");
    } else {
        whiteTheme.classList.add("white-theme");
    }
});

// Password generating

generatePass.addEventListener("click", function(){
    strongPassword = "";
    pass.value = strongPassword;
    passCopied.classList.remove("visible");
    invalidPass.classList.remove("visible");

    if(passLength.value.length == 0){
        for(let i = 0; i < 15; i++) {
            charNb = Math.floor(Math.random()*nb);
            strongPassword = strongPassword + characters[charNb];
        }
        pass.value = strongPassword;
    } else if(passLength.value >= 8 & passLength.value <= 20) {
        passValue = passLength.value;

        for(let i = 0; i < passValue; i++) {
            charNb = Math.floor(Math.random()*nb);
            strongPassword = strongPassword + characters[charNb];
        }
        pass.value = strongPassword;

    } else if(passLength.value < 8 | passLength.value > 20) {
        invalidPass.classList.add("visible");
    } 
});

// Copying password by click

copyPass.addEventListener("click", function(){
    pass.select();
    document.execCommand("copy");

    if(pass.value.length >= 8) {
        passCopied.classList.add("visible");
    }
});