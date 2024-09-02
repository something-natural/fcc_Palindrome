// variables
const input = document.getElementById("text-input")
const btn = document.getElementById("check-btn")
const result = document.getElementById("result")
let inputValue = ""


// function to getInput value
function getInput(e){
    inputValue = e.target.value;
}

// function to check palindrome
function checkPal(){    
    // first, remove '\W' and make all letters to lowercase. don't use "" for regex    
    const reg = /[a-z]|[0-9]/g    
    const arr = inputValue.toLowerCase().match(reg);
    let firHarf = [];
    let secHarf = []; 
    let resultMsg  
    if ( arr.length % 2 === 0) {        
        // use ...arr
        firHarf = [ ...arr.slice(0, arr.length / 2)]
        secHarf = [ ...arr.reverse().slice(0, arr.length / 2)]        
        /*
        or use loop and push
        for (let i = 0 ; i < arr.length / 2 ; i++ ){
            firHarf.push(arr[i]);            
        }
        for ( let j = arr.length - 1; j = arr.length / 2 ; j--){                
            secHarf.push(arr[j]);
        }
        console.log( firHarf.join(""), secHarf.join(""))
        */
    } else {
        // user ...arr        
        firHarf = [ ...arr.slice(0, Math.floor(arr.length / 2))]
        secHarf = [ ...arr.reverse().slice(0, Math.floor(arr.length / 2))]
        console.log(firHarf.join(""), secHarf.join(""))
        /*
        or use loop and push
        for (let i = 0 ; i < Math.floor(arr.length / 2) ; i++ ){
            firHarf.push(arr[i]);            
        }
        for ( let j = arr.length - 1; j < Math.floor(arr.length / 2) ; j--){                
            secHarf.push(arr[j]);
        }
        console.log( firHarf.join(""), secHarf.join(""))
        */
    }
    if ( firHarf.join("") === secHarf.join("") ){
        resultMsg = `${inputValue} is a palindrome`
    } else {
        resultMsg = `${inputValue} is not a palindrome`
    }
    result.innerHTML = `<p>${resultMsg}</p>`;
}

input.addEventListener("input", getInput);
btn.addEventListener("click", checkPal)
