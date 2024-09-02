// variables
const input = document.getElementById("text-input")
const btn = document.getElementById("check-btn")
const result = document.getElementById("result")

// function to check palindrome
function checkPal(e){    
    //make alert
    if ( ! input.value ){
        window.alert("Please input a value")
        return
    }    
    // remove '\W' and make all letters to lowercase. don't use "" for regex    
    const reg = /[a-z]|[0-9]/g    
    const arr = input.value.toLowerCase().match(reg);
    // declare empty array
    let firHarf = [];
    let secHarf = []; 
    let resultMsg 

    // slice arr into two array
    if ( arr.length % 2 === 0) {
        firHarf = [ ...arr.slice(0, arr.length / 2)]
        secHarf = [ ...arr.reverse().slice(0, arr.length / 2)]                
    } else {        
        firHarf = [ ...arr.slice(0, Math.floor(arr.length / 2))]
        secHarf = [ ...arr.reverse().slice(0, Math.floor(arr.length / 2))]
        console.log(firHarf.join(""), secHarf.join(""))
     }
    
     // print result
    if ( firHarf.join("") === secHarf.join("") ){
        resultMsg = `${input.value} is a palindrome`
    } else {
        resultMsg = `${input.value} is not a palindrome`
    }
    result.innerText = resultMsg;
}

btn.addEventListener("click", checkPal)