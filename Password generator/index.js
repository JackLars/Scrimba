const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];


var whiteTheme = document.getElementById("container");
var pass = document.getElementById("password");
var passLength = document.getElementById("password-value");
let passNumb;
let nb = characters.length;
let charNb;
let passValue;


function themeSwitch() {
    if (whiteTheme.classList.contains("white-theme")) {
        whiteTheme.classList.remove("white-theme");
    } else {
        whiteTheme.classList.add("white-theme");
    }
}

function generatePass() {
    passNumb = "";

    if(passLength.value != null & passLength.value >= 8) {
        passValue = passLength.value;
        for(let i = 0; i < passValue; i++) {
            charNb = Math.floor(Math.random()*nb);
            passNumb = passNumb + characters[charNb];
        }
        pass.value = passNumb;
        console.log(passValue);
    } else if(passLength.value != null & passLength.value < 8) {
        console.log("Error");
    } else {
        for(let i = 0; i < 15; i++) {
            charNb = Math.floor(Math.random()*nb);
            passNumb = passNumb + characters[charNb];
        }
        pass.value = passNumb;
    }
}

function copyPass() {
    pass.select();
    document.execCommand("copy");
}