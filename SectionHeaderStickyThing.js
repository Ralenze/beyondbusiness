const aboutHeader = document.getElementById("aboutHeader")
const startY = aboutHeader.offsetTop; 

function onScroll(){
    if(window.scrollY > startY + 340){
        aboutHeader.classList.add("activeHeader");
    }else{
        aboutHeader.classList.remove("activeHeader");
    }
}

window.addEventListener('scroll', onScroll)





