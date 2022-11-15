/** typing animation */
var typed = new Typed(".typing",{
strings:["","Web Designer", "web Developer", "Graphic Designer"],
typeSpeed:100,
BackSpeed:60,
loop: true
})

/** active nav bar */
var activeButton = document.getElementById("navbar");
var chosenLink = activeButton.getElementsByClassName("nav-item");
