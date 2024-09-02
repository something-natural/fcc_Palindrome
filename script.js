const input = document.getElementById("text-input")
const btn = document.getElementById("check-btn")
let inputValue = ""

function checkInput(e){
    inputValue = e.target.value;
}

function checkPal(){
    console.log(inputValue);
}

input.addEventListener("input", checkInput);
btn.addEventListener("click", checkPal)