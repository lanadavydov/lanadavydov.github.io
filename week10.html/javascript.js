console.log("javascript.js");
const theButton = document.querySelector('button');
let theBody = document.querySelector('body');
let theMain = document.querySelector('main');
let theThesis = document.getElementById('theMainPoint');

theButton.addEventListener('click', beTheChange);

function beTheChange(){
    theButton.style.backgroundColor = "rgb(3, 7, 79)";
    
    // New CSS property from js style object #1
    document.getElementById("theImage").src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/56369/cloud-with-rain-emoji-clipart-xl.png";
    
    theBody.style.backgroundColor = "rgb(232, 141, 30)";
    theMain.style.backgroundColor = "rgb(245, 190, 103)";

    theThesis.style.color = "blue";
    theThesis.textContent = "click for rain";
    // New CSS property from js style object #2
    theThesis.style.fontSize = "x-large";
    // New CSS property from js style object #3
    theThesis.style.fontVariant = "small-caps";
}
