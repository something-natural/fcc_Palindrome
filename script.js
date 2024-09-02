// variables
const input = document.getElementById("text-input")
const btn = document.getElementById("check-btn")
let inputValue = ""


// function to getInput value
function getInput(e){
    inputValue = e.target.value;
}

// function to check palindrome
function checkPal(){    
    // first, remove '\W' and make all letters to lowercase. don't use "" for regex
    const reg = /\w/g    
    const arr = inputValue.toLocaleLowerCase().match(reg);
    console.log(arr);    
}

input.addEventListener("input", getInput);
btn.addEventListener("click", checkPal)