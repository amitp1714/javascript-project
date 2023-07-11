let text = document.querySelector(".inputs input");
let todoList = document.querySelector('.todo_list');
function add_todo(){

    if(text.value == ''){
        alert("Please enter you task ");
    }
    else{
        let addTodo = document.createElement('div')
        addTodo.setAttribute('class', "todo");
        
        let radio = document.createElement("span")
        radio.innerHTML = "&#x261B";
        addTodo.appendChild(radio);
        todoList.appendChild(addTodo);

        let li = document.createElement("p");
        li.setAttribute('class', 'todo');
        li.innerHTML = text.value.toUpperCase();
        addTodo.appendChild(li);
        todoList.appendChild(addTodo);

        let del = document.createElement("span");
        del.setAttribute('class', "delete");
        del.innerHTML = "&#10060";
        addTodo.appendChild(del);
        todoList.appendChild(addTodo);

    }
    text.value = '';
    let completed = document.querySelector(".todo p")
    if(completed.innerHTML != ""){
        completed.addEventListener('click', ()=>{
        completed.style.textDecoration = "line-through"
    });
    let removeTodo = document.querySelector('.todo_list .todo');
    let remove = document.querySelector(".todo .delete");
    remove.addEventListener('click', ()=>{
        removeTodo.remove();
    })

    }
    
   

   

}

