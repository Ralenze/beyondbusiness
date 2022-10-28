document.getElementById("title").innerHTML = "hi"

let index = 3; 
let images = document.getElementsByClassName("bgImage")

function changeImg(){
    images[i].class = "bgImage inactive";

    if(i == images.length){
        i = 0
    }
    images[i].class = "bgImage";
}

setInterval(changeImg, 5000);


// btw this doesn't work.... 
// and if it did more stuff add probably... 
// need check if js is even running first.
