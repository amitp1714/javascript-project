function changebg(color){
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text");
    if(color == '#ffffff'){
        for (let ele of txt){
            ele.style.color = '#000000'
        }
    }
    else{
        for (let ele of txt){
            ele.style.color = '#ffffff'
        }
    }
}