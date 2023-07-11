const textbox = document.getElementById("textBox");
textbox.addEventListener('input', function(){
    let text = textbox.value;
    document.getElementById("char").innerHTML = text.length;
    let words = text.split(" ");
    document.getElementById("word").innerHTML = words.length;
})
const btn = document.getElementById("clear");
btn.addEventListener('click', ()=>{
    textbox.value = " ";
    document.getElementById("char").innerHTML = 0
    document.getElementById("word").innerHTML = 0;
})


