let numberEL = document.querySelector(".number-el")
let increment =document.querySelector(".increment-btn")
let number=0
increment.addEventListener("click", function() {
    
    number++
    numberEL.innerHTML = number


})

