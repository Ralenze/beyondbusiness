
let images = document.getElementsByClassName("bgImg")
let index = 0;

function changeImg(){
    document.getElementById("title").innerHTML =  index;

    images[index].className = "bgImg inactive";

    index++;
    if(index == images.length){
        index = 0;
    }

    images[index].className = "bgImg active";

}

setInterval(changeImg, 5000);

