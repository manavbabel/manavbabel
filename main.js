/* Function to shift colours when scrolling past the name */

$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 170) {
          $("#Name").addClass("changeColor");
          $("#NameText").addClass("changeColor");
          $("#Scroll").addClass("hide");
       } else {
          $("#Name").removeClass("changeColor");
          $("#NameText").removeClass("changeColor");
       }
    });
 });

 /* Konami code functionality */

var KonamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

 // a variable to remember the 'position' the user has reached so far.
var KonamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', (e) => {

  // get the key
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
});

function ActivateCheats() {
  alert("cheats activated");
}

