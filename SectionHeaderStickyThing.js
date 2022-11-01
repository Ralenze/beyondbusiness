const aboutHeader = document.getElementById("aboutHeader")

function onScroll(){
    if(window.scrollY > 750 && window.scrollY < 2000 ){
        aboutHeader.classList.add("activeHeader");
    }else{
        aboutHeader.classList.remove("activeHeader");
    }
}

window.addEventListener('scroll', onScroll)





