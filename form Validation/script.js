function seterror(id, error){
  element = document.getElementById(id);
  console.log(element.getElementsByClassName("formerror")[0].innerHTML = error)
}

function clearError(){
  errors = document.getElementsByClassName("formerror");
  for (let item of errors){
    item.innerHTML = ""
  }
}

  function validform() {
    returnval = true;
    clearError();
    let Fname = document.getElementById("firstname").value;
    if(Fname == ""){
      seterror('fname' , " * Enter your First name")
      returnval = false;
    }
    let Lname = document.getElementById("lastname").value;
    if(Lname == ""){
      seterror('lname' , " * Enter your Last Name")
      returnval = false;
    }
    let email = document.getElementById("email").value;
    if(email == ""){
      seterror('mail' , " * Enter valid email")
      returnval = false;
    }
    let number = document.getElementById("mobile").value;
    if(number.length < 10){
      seterror('contact' , " * Enter Valid Mobile No.")
      returnval = false;
    }
    return returnval;
  }
  