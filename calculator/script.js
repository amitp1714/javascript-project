let string = ""
let buttons = document.querySelectorAll(".buttons")
Array.from(buttons).forEach ((button) =>{
    button.addEventListener("click", (ev) =>{
        if(ev.target.innerHTML == "="){
            string = eval(string)
            document.querySelector(".display").innerText= string;
        }
        else if(ev.target.innerHTML == "DEL"){
            string = ''
            document.querySelector(".display").innerText= string;
        }
        else{
            string = string + ev.target.innerHTML;
            document.querySelector(".display").innerText= string;
        }
    })
})