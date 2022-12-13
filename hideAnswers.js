questions = document.getElementsByClassName("questionHeader")
console.log(questions[0].nextElementSibling);

for(i = 0; i< questions.length;i++){
  questions[i].i = i;
    questions[i].addEventListener("click", function(e) {
      
        panel = (e.target).nextElementSibling; 
        panel.classList.toggle("hidden")
    })
}