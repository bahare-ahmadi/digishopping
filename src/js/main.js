console.log("Hello world from main.js");

const today = new Date();
if (today.getMonth() === 5 && today.getDate() === 4) {
  alert("Today is June 4th! Happy Birthay Bahare!");
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}