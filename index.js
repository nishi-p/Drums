/* (First Button)
document.querySelector("button").addEventListener("click", handleClick);
function handleClick(){
  alert("I got clicked");
}*/

/* Anonymous function (All buttons)
document.querySelector(".set").addEventListener("click", function () {
  alert("I got clicked");
});*/

//Detecting button press with mouse click
var numberOfButtons = document.querySelectorAll(".drum").length;

// button mouse click
for(var i = 0; i < numberOfButtons; i++){
  // mouse click EventListener
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //alert("I got clicked");

    //this --> identity of the button that triggered the EventListener
    //change text color on click
    //this.style.color = "black";
    var buttonInnerHTML = this.innerHTML;

    //switch statements
    //mouse click events
    //play sounds
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detectung keyboard button press

//keyboard key click 'event' (callback) EventListener
//add this event to the entire document unlike mouse click event which is added
//to a specific button or element

//callback

//addEventListener --> Higher order function
/*function (event) --> callBack function that waits for an event to take place
(keydown,click etc) before executing itself. Here it gets the information <event>
after the event takes place to take appropriate action*/
document.addEventListener("keydown", function (event){

  // if any button than the keys are pressed , then animation cannot be applied
  //and gives error

  /*
  ******************************************
  ??????
  var drumKeys = [];
  for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    drumKeys.push(document.querySelectorAll(".drum")[i].innerHTML);
  }
  *****************************************/

  //event (keydown) is what triggered the EventListener --> keydown object <event>
  //is created on keypress which has many properties(which key,character code, etc).
  //Use this object <event> which is a callback to access the properties
  //collected after the keydown or click event, etc.

  //alert("Key was pressed");
  //console.log(event);

  //keyboard keydown event 'key' property which tells which key was pressed
  //play sounds

  makeSound(event.key);
  buttonAnimation(event.key);

});

/*
***************************************
???????
  if (drumKeys.includes(event.key)){}
    makeSound(event.key);
    buttonAnimation(event.key);
  }
});
****************************************/

function makeSound(key){
  switch (key) {
    case "w":
        // Audio is a predefined audio object having play() function and
        // fileLocation attribute.
        var tom1 = new Audio("tom-1.mp3");
        tom1.play();
      break;

    case "a":
        var tom2 = new Audio("tom-2.mp3");
        tom2.play();
      break;

    case "s":
        var tom3 = new Audio("tom-3.mp3");
        tom3.play();
      break;

    case "d":
        var tom4 = new Audio("tom-4.mp3");
        tom4.play();
      break;

    case "j":
        var snare = new Audio("snare.mp3");
        snare.play();
      break;

    case "k":
        var crash = new Audio("crash.mp3");
        crash.play();
      break;

    case "l":
        var kick = new Audio("kick-bass.mp3");
        kick.play();
      break;

    default:
        console.log(key);
  }
}

function buttonAnimation(currentKey){
  //access the class of the key pressed
  /*
  *********************************
  ??????????
  Shouldn't the class be ".w drum"
  *********************************/
  var activeButton = document.querySelector("." + currentKey);

  //add css style and after some delay remove this style

  //add css style
  activeButton.classList.add("pressed");

  //remove css style after some waiting time in ms
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

  //activeButton.style.color = "red";

}
