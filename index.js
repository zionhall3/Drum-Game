// SELECT ALL DRUM ELEMENTS

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// FOR LOOP THAT ORDERS EACH BUTTON


for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    
    function handleClick(){

        // WAS HAVING TROUBLE FINDING A BUG IN MY CODE AND 
        // // THEN FIGURED OUT THE PROBLEM WAS THAT I WASN'T
        // PUTTING THIS VARIABLE IN THE RIGHT PLACE INSIDE THE FUNCTION

        var buttonInnerHTML = this.textContent;

        // PASSES IN THE BUTTON THAT GOT PRESSED

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    }

    // DETECTS KEYBOARD PRESSES

    document.addEventListener("keypress", function(event) {
        makeSound(event.key);

        buttonAnimation(event.key);
    });

    function makeSound(key){

        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
    
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
    
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
    
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
    
            case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
    
            case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
    
            case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            default: console.log(buttonInnerHTML)
            }

    }

    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("." + currentKey);
        
        // ADDS A CSS STYLE TO THE PRESSED BUTTON
        activeButton.classList.add("pressed");    
        
        // REMOVES THE CSS STYLE CLASS AFTER 1 SECOND
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }

}

