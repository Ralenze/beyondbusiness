let index = 0; 
let images = document.getElementsByClassName("bgImage")

function changeImg(){
    images[i].class = "bgImage inactive";

    if(i == images.length){
        i = 0
    }
    images[i].class = "bgImage";
}

setInterval(5000, changeImg);


// btw this doesn't work.... 
// and if it did more stuff add probably... 
// need check if js is even running first.
