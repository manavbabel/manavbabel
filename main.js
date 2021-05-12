/* Function to shift colours when scrolling past the name */

function ScrollChange(event) {
  var Name = document.getElementById("Name");
  var NameText = document.getElementById("NameText");
  var Scroll = document.getElementById("Scroll");
  var NameBackground = document.getElementById("NameBackground");

  pos = window.pageYOffset;
  
  if (pos > 60) {
    Name.classList.add("changeColor");
    NameText.classList.add("changeColor");
    Scroll.classList.add("hide");
    NameBackground.classList.add("changeColor");
    document.body.classList.add("changeColor");
  } else {
    Name.classList.remove("changeColor");
    NameText.classList.remove("changeColor");
    Scroll.classList.remove("hide");
    NameBackground.classList.remove("changeColor");
    document.body.classList.remove("changeColor");
  }
}

document.addEventListener("scroll", ScrollChange, {passive:false});

/*

 makes nav visible if Name is offscreen 

let NameObserver = new IntersectionObserver(
  (Name, observer) => {
    if (Name.intersectionRatio <= 0.5) {
        document.getElementById("Nav").classList.add("hidden");
        alert("hidden!")
      }
    }, {threshold: 0});

NameObserver.observe(document.getElementById("NameText"));
*/

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
}