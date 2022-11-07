questions = document.getElementsByClassName("questionHeader")
console.log(questions[0].nextElementSibling);

for(i = 0; i< questions.length;i++){
  questions[i].i = i;
    questions[i].addEventListener("click", function(e) {
        console.log(e.target);


        panel = (e.target).nextElementSibling; 
        console.log(panel);
 
        // issue is panel i think... like this isn't selecting properly cus error is that 
        // .style is undefined so i think isn't selecting thing want...
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
    })
}