/* TODO: 
intersectionobserver not firing on intersection of nametext with nav 
instead of modifying classes, directly modify styles eg opacity?
add cheats color functionality to cards
*/

/* Function to shift colours when scrolling past the name */

function ScrollChange(event) {
  var Name = document.getElementById("Name");
  var NameText = document.getElementById("NameText");
  var Scroll = document.getElementById("Scroll");
  var NameBackground = document.getElementById("NameBackground");
  var nav = document.getElementsByTagName("nav")[0];

  pos = window.pageYOffset;
  
  if (pos > 60) {
    Name.classList.add("changeColor");
    NameText.classList.add("changeColor");
    Scroll.classList.add("hide");
    NameBackground.classList.add("changeColor");
    document.body.classList.add("changeColor");
    nav.classList.add("changeColor");
  } else {
    Name.classList.remove("changeColor");
    NameText.classList.remove("changeColor");
    Scroll.classList.remove("hide");
    NameBackground.classList.remove("changeColor");
    document.body.classList.remove("changeColor");
    nav.classList.remove("changeColor");
  }
}

document.addEventListener("scroll", ScrollChange, {passive:false});

/* Konami code functionality */

var KonamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

// a variable to remember the 'position' the user has reached so far.
  var KonamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', Konami);

function Konami(e) {
  
  var key = e.key;

  // get the value of the required key from the konami code
  var RequiredKey = KonamiCode[KonamiCodePosition];

  // compare the key with the required key
  if (key == RequiredKey) {

    // move to the next key in the konami code sequence
    KonamiCodePosition++;

    // if the last key is reached, activate cheats
    if (KonamiCodePosition == KonamiCode.length) {
      ActivateCheats();
      KonamiCodePosition = 0;
    }
  } else {
    KonamiCodePosition = 0;
  }
}

function ActivateCheats() {
  document.getElementById("Name").classList.add("cheats");
  document.getElementById("NameText").classList.add("cheats");
  document.getElementById("NameBackground").classList.add("cheats");
  document.getElementsByTagName("nav")[0].classList.add("cheats");
  document.getElementById("Scroll").classList.add("cheats");
  document.getElementsById("card").forEach(function(element){ element.classlist.add("cheats")});
}

/* Causes Nav to separate when NameText passes through it */

var nav = document.getElementsByTagName("nav")[0];
var ul = document.getElementsByTagName("ul")[0];

let options = {
  root: nav,
  threshold: 0.2
}

function NavSeparation (entries) {

    if (entries[0].isIntersecting) {
      nav.classList.add("touching");
      alert("int");
    } else {
      nav.classList.remove("touching");
      /*alert("nonint");*/
    }
  };

let NameTextObserver = new IntersectionObserver(NavSeparation, options);

NameTextObserver.observe(document.getElementById("NameText"));