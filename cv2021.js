let cv = document.getElementById("cv");

cv.addEventListener("mouseover", function(event) {

    event.target.style.filter = "blur(0px)";
})

cv.addEventListener("mouseleave", e => {
    cv.style.filter = "blur(4px)";
})


let lm = document.getElementById("lm");

lm.addEventListener("mouseover", function(event) {

    event.target.style.filter = "blur(0px)";
})

lm.addEventListener("mouseleave", e => {
    lm.style.filter = "blur(4px)";
})

function hideboxes(){
    var boxes = document.getElementsByClassName("popuptext");
    
    for (var i =0; i < boxes.length; i++) {
    boxes[i].style.display = 'none';
    boxes[i].style.visibility = 'hidden';
}

}
function myFunction(id) {
    // console.log(id)

   
hideboxes();
   
    var popup = document.getElementById(id);
    popup.style.display = 'block';
    popup.style.visibility = 'visible';
    popup.classList.toggle("show");
    
    return false;
  }

