const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function delelteToDo(event){
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));
    saveToDos();
   

}

function paintToDo(newToDo){
    const liEl = document.createElement("li");
    liEl.id = newToDo.id;
    const spanEl = document.createElement("span");
    spanEl.innerText = newToDo.text;
    const btnEl = document.createElement("button");
    
    btnEl.innerText = "X";
    btnEl.addEventListener("click", delelteToDo);
    
    liEl.appendChild(spanEl);
    liEl.appendChild(btnEl);
    toDoList.appendChild(liEl);

}

function handleTodoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value ="";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);       
    }
