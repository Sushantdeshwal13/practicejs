let input = document.querySelector("#input");
let btn = document.querySelector("#btn")
let list = document.querySelector("#list")


let todos = JSON.parse(localStorage.getItem("todos")) || [];

function savetodo(){
    localStorage.setItem("todos", JSON.stringify(todos))
}


function render(){
    list.innerHTML="";
    todos.forEach((todo, index)=>{
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type="checkbox";
        checkbox.checked=todo.done;
        checkbox.addEventListener("change",()=>{
            todo.done=checkbox.checked;
            savetodo();
            render();
        })
//-----------------text-----
     
      const text=document.createElement("span");
      text.textContent=todo.text;
      if(todo.done) text.style.textDecoration="line-through"

      text.addEventListener("dblclick",()=>{
        const newtext = prompt("edit task",todo.text);
        if(newtext){
            todo.text = newtext.trim();
            savetodo();
            render();
        }
      })
//------------------delete-------
 const del = document.createElement("button");
     del.textContent="delete";
     del.addEventListener("click",()=>{
        todos.splice(index,1);
        savetodo();
        render();
     })
        li.sppend(checkbox,del,text);
        list.append(li)
    })
}


function addtodo(){
     const text = input.value.trim();
     if(!text) return;

     todos.push({text:text, done:false})
}