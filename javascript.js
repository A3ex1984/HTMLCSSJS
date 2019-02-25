// Link for Developer Tool/ShortCuts in Google Chrome https://developers.google.com/web/tools/chrome-devtools/shortcuts
/* Multi
Line Comments*/ 

document.getElementsByTagName("h1")[0].style.color = "#ff0000";

console.log("hiya friend!");

for (var i = 0; i < 10; i++) {
    console.log(i);
  }

  document.body.addEventListener('click', function () {
    var myParent = document.getElementById("Banner"); 
    var myImage = document.createElement("img");
    myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
    myParent.appendChild(myImage);
    myImage.style.marginLeft = "160px";
});

var myNumber = 27; //this is a number
var myString = "Julia"; //this is a string
var myBoolean = false; //this is a boolean

//Writing things to the console
console.log(1 + 5 - 2);

// Numbers in JS are just being typed in. Typing 3 will return 3 to the console.
3
3 + 2.1
// Booleans for comparison are also just typed in
5 > 10 // returns true

//Strings - strings are in "" and can be numbers or letters; without "" the interpreter things it is a variable and not a string
//String concatenation
"Hello" + ", Welcome to New York City"

var quote = "Stay awhile and listen!";
console.log(quote[6]);

//Variables
var variableName = value;
var name = "Zoe"; 
var greeting = "Hello";
greeting + " Mike!";

//Conversion
var celsius = 12;
var fahrenheit = celsius * 1.8 +32 /* convert celsius to fahrenheit here */

console.log(fahrenheit);

//Special Characters
Code	Character
\\	\ (backslash)
\"	'' (double quote)
\'	' (single quote)
\n	newline
\t	tab

//Conditionals
//An algorithm are the steps that a computer takes to solve a problem
var prize = 15.00; //prize of hammer
var money = 20.00; //how much money i have
if (money >= prize) {
  console.log ("Buy the hammer.")
} else {
  console.log ("Do not buy the hammer.")
}

var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}


//Loops


//Functions


//Arrays


//Objects

