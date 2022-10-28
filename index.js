
let index = 0; 
let images = document.getElementsByClassName("bgImg")


function changeImg(){
    document.getElementById("title").innerHTML =  index;

    //error on this line i
    images[index].className = "bgImage inactive";

    if(index == images.length){
        index = 0;
    }else{
        index++;
    }

    images[index].className = "bgImage";
    images[index].style.display = "block";

}

setInterval(changeImg, 5000);


// btw this doesn't work.... 
// and if it did more stuff add probably... 
// need check if js is even running first.
