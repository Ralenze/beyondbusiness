questions = document.getElementsByClassName("questionHeader")


for(i = 0; i< questions.length;i++){
    questions[i].addEventListener("click",() =>{

        panel = this.nextElementSibling; 
        // issue is panel i think... like this isn't selecting properly cus error is that 
        // .style is undefined so i think isn't selecting thing want...
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
    })
}

// btw the thing isn't a button so idk if there are issues adding eventlistener to it...