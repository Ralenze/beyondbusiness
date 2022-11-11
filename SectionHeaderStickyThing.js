const aboutHeader = document.getElementById("aboutHeader")
const text = document.getElementsByClassName("aboutText");
const clientHeight = document.documentElement.clientHeight;
const startY = aboutHeader.offsetParent.offsetTop + aboutHeader.offsetTop + aboutHeader.offsetHeight - 0.6* clientHeight;


const endY = text[text.length-1].offsetParent.offsetTop+ text[text.length-1].offsetTop -0.35 * clientHeight;
// figure out how to this better..


// also animations or smth? idfl...
//also also, have thing stay at end position when done? 
function onScroll(){
    if(window.scrollY > startY && window.scrollY < endY){
        aboutHeader.classList.add("activeHeader");
        aboutHeader.classList.remove("endHeader");
    }else if(window.scrollY>= endY){
        aboutHeader.classList.remove("activeHeader");
        aboutHeader.classList.add("endHeader");
    }else{
        aboutHeader.classList.remove("activeHeader");
    }
}

window.addEventListener('scroll', onScroll)


// supposed be around 830


