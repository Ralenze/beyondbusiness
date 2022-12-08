const aboutHeader = document.getElementById("aboutHeader")
const text = document.getElementsByClassName("aboutText");
const clientHeight = document.documentElement.clientHeight;

const startY = aboutHeader.offsetParent.offsetTop + aboutHeader.offsetTop + aboutHeader.offsetHeight - 0.65* clientHeight;



const endY = text[text.length-1].offsetParent.offsetTop+ text[text.length-1].offsetTop -0.45 * clientHeight;
// figure out how to this better..
let a = aboutHeader.offsetParent.offsetTop + aboutHeader.offsetTop;
let applyTopToSticky = true;
const imageheight = document.getElementById('titleArea').offsetHeight;

const initial = aboutHeader.offsetTop;
const initInner = aboutHeader.offsetParent.offsetTop;
const b = (document.getElementsByClassName('sectionDiv'))[0]
const red= document.getElementById('aboutDiv');
let startToEndRange = endY - startY;
let selectedImg = 1;
let selectings = document.getElementById('transition');
// also animations or smth? idfl...
//also also, have thing stay at end position when done? 
function onScroll(){
    if(window.scrollY > startY && window.scrollY < endY){
        

        if (applyTopToSticky) {
            aboutHeader.classList.add("activeHeader");
        aboutHeader.style.marginTop = '0px';
            let b = a - startY;
            aboutHeader.style.top = b.toString()  + "px";
            applyTopToSticky = false;
        }

        aboutHeader.classList.remove("endHeader");

    }
    else if(window.scrollY >= endY){
        
        

        if (!applyTopToSticky){
            aboutHeader.classList.remove("activeHeader");
        aboutHeader.classList.add('endHeader');
            let b = endY - initInner + aboutHeader.offsetTop;
            aboutHeader.style.marginTop = '0px';
            aboutHeader.style.top = b.toString() + 'px';
            
        }

        applyTopToSticky = true;
        

    }
    else{

        if(!applyTopToSticky) {
            aboutHeader.classList.remove("activeHeader");

            let b = initial;
            aboutHeader.style.marginTop = '0px';
            aboutHeader.style.top = b.toString() + 'px';
        }
        
        applyTopToSticky = true;

    }
    // so basically we transition between 3 images, so we divide the range thing by 3. initially our selectimg is 1..
    /* 
    and basically if our scrolling is greater than the supertop image(the blackpink thing u have) which is a constant plus a third 
etc then we switch img 
else if it is less than our no change area (like the part where we dont change img-we have 3 of these and each of them is roughly range/3
idk if this make sense but like the area where we no change) then we switch- code works i think u can check.


ALSO i notice that the second image may not get enough time like its range is small compared to the other ones so if you
want to edit it then edit and change the region of selectedImg * startToEndRange/3 part like you could add a constant or do like 2/5 instead of 1/3
ur choice
    */
    if(window.scrollY >= (initInner + selectedImg * startToEndRange/3) && selectedImg != selectedImg + 1 && selectedImg <3) {
        selectedImg++;
        selectings.style.backgroundImage = 'url("images/bbusinessimgfiller' + selectedImg.toString() + '.jpeg")';
     

    }
    else if (window.scrollY <(initInner + (selectedImg-1) * startToEndRange/3) && selectedImg >1){
        selectedImg--;
        selectings.style.backgroundImage = 'url("images/bbusinessimgfiller' + selectedImg.toString() + '.jpeg")';}
    }



window.addEventListener('scroll', onScroll)


// supposed be around 830


