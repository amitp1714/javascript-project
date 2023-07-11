const inputText = document.getElementById("inputval");
const btn = document.getElementById("check");
btn.addEventListener("click", ()=>{
    let result = document.getElementById("output");
    let filterInput = inputText.value
    let reverseInput = filterInput.split("").reverse().join("");
    if(filterInput.length == 0){
        return result.innerHTML = `Please Enter Some Value`;
    }
    else if(filterInput != reverseInput){
       return result.innerHTML = `NO, ${inputText.value} is Not Palindrome`;
    }
    else{
       return result.innerHTML = `YES, ${inputText.value} is Palindrome`;
    }
});

