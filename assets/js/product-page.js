let currentImage = document.getElementById("current-image");
let header= document.getElementById("header");
let modal = document.getElementById("modal");
let span = document.getElementsByClassName("close")[0];

document.addEventListener("DOMContentLoaded", function (){
    modal.style.display = "block";
})
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }