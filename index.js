
let images = document.getElementsByClassName("bgImg")
let index = 0;

function changeImg(){
    images[index].className = "bgImg inactive";

    index++;
    if(index == images.length){
        index = 0;
    }

    images[index].className = "bgImg active";

}

setInterval(changeImg, 10000);

// probably stop process after they scroll off. less slow maybe? 



var prevScrollpos = window.scrollY;



window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBarDiv").style.top = "0";
  } else {
    document.getElementById("navBarDiv").style.top = "-20vh";
  }
  prevScrollpos = currentScrollPos;
}