questions = document.getElementsByClassName("questionHeader")


for(i = 0; i< questions.length;i++){
    questions[i].addEventListener("click",() =>{

        panel = this.nextElementSibling; 
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
    })
}

// btw the thing isn't a button so idk if there are issues adding eventlistener to it...