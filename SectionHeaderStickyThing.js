const aboutHeader = document.getElementById("aboutHeader")
const text = document.getElementsByClassName("aboutText");
const startY = aboutHeader.offsetTop; 
const endY = text[text.length-1].offsetTop

// get way measure size of title and final paragraph ig
function onScroll(){
    if(window.scrollY > startY + 340 && window.scrollY <= endY + 560){
        aboutHeader.classList.add("activeHeader");
    }else{
        aboutHeader.classList.remove("activeHeader");
    }
}

window.addEventListener('scroll', onScroll)





