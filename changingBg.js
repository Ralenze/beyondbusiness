
let images = document.getElementsByClassName("bgImg")
let index = 0;

function changeImg() {
  images[index].className = "bgImg inactive";

  index++;
  if (index == images.length) {
    index = 0;
  }

  images[index].className = "bgImg active";

}

setInterval(changeImg, 10000);

// probably stop process after they scroll off. less slow maybe? 

//var prevScrollpos = window.scrollY;
navBar =  document.getElementById("navBarDiv")
navBar.style.maxHeight = navBar.scrollHeight + "px";

const aboutSectionHeight = document.getElementById('aboutDiv').offsetTop


// window.onscroll = function () {
//   var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     navBar.style.maxHeight = navBar.scrollHeight + "px";
//   } else {
//     navBar.style.maxHeight = null;
//   }
//   prevScrollpos = currentScrollPos;
// }

window.onscroll = function(){
  var currentScrollPos = window.scrollY;
  if(currentScrollPos >= aboutSectionHeight){
    navBar.classList.remove("transparent")
  }else{
    navBar.classList.add("transparent")
  }
}