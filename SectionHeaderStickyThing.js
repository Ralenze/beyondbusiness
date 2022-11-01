const aboutHeader = document.getElementById("aboutHeader")

function onScroll(){
    if(window.scrollY > 700 && window.scrollY ){
        aboutHeader.classList.add("activeHeader");
    }else{
        aboutHeader.classList.remove("activeHeader");
    }
}

window.addEventListener('scroll', onScroll)





