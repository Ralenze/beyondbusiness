const aboutHeader = document.getElementById("aboutHeader")
const text = document.getElementsByClassName("aboutText");
const startY = aboutHeader.offsetTop + aboutHeader.offsetHeight*4
const endY = text[text.length-1].offsetTop + text[text.length-1].offsetHeight

// figure out better way decide when tf start and end...
// also animations or smth? idfl...
function onScroll(){
    if(window.scrollY > startY  && window.scrollY <= endY + 560){
        aboutHeader.classList.add("activeHeader");
    }else{
        aboutHeader.classList.remove("activeHeader");
    }
}

window.addEventListener('scroll', onScroll)





