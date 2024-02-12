const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const paragraph = document.querySelectorAll(".paragraph");
const card_question = document.querySelectorAll(".card_question");

for(let i = 0; i < plus.length; i++){
    plus[i].addEventListener("click", function(){
        plus[i].classList.toggle("hidden");
        minus[i].classList.toggle("hidden");
        paragraph[i].classList.toggle("hidden");
    });
}

for(let i = 0; i < minus.length; i++){
    minus[i].addEventListener("click", function(){
        plus[i].classList.toggle("hidden");
        minus[i].classList.toggle("hidden");
        paragraph[i].classList.toggle("hidden");
    });
}
