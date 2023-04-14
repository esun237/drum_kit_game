// // // when "clicking" the first button, trigger the function handleClick()
// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//     alert("I got clicked!");
// }

var buttonArray = document.querySelectorAll("button.drum");
var numberOfButton = buttonArray.length;
for (var i = 0; i < numberOfButton; i++) {
    document.querySelectorAll("button.drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
document.addEventListener("keydown", function(event) {
        playSound(event.key);
        buttonAnimation(event.key);
});

function buttonAnimation(currentLetter) {
    document.querySelector("." + currentLetter).classList.add("pressed");
    setTimeout(function() {document.querySelector("." + currentLetter).classList.remove("pressed");}, 100);
}
        
        
function playSound(key) {
        switch (key) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            
            case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            default:
                console.log(buttonInnerHTML);
                break;
        }
}


 





