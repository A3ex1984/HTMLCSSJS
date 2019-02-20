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

//Variables
var variableName = value;
var name = "Zoe"; 
var greeting = "Hello";
greeting + " Mike!";
