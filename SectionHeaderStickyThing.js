const aboutHeader = document.getElementById("aboutHeader")
const text = document.getElementsByClassName("aboutText");
const startY = aboutHeader.offsetTop + aboutHeader.offsetHeight*7
// figure out how to this better...

const endY = text[text.length-1].offsetTop + text[text.length-1].offsetHeight*3

// figure out better way decide when tf start and end...
// also animations or smth? idfl...
//also also, have thing stay at end position when done? 
function onScroll(){
    if(window.scrollY > startY && window.scrollY <= endY){
        aboutHeader.classList.add("activeHeader");
    }else{
        aboutHeader.classList.remove("activeHeader");
    }
}

window.addEventListener('scroll', onScroll)





