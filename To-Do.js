let ToDoItems=[];

const loadCards=()=>{
     ToDoItems = JSON.parse(localStorage.getItem("todoItems") || "[]");
    const containerElement=document.querySelector("#container");
    containerElement.innerHTML="";
    for(const ToDoItem of ToDoItems){
        containerElement.innerHTML+=`<div class="item">
        ${ToDoItem} <img src="./Images/trash.png" class="delete-icon" onclick="deleteTodo('${ToDoItem}')">
        </div>`;
    }
};
loadCards();
const AddToDo=()=>{
    const Taskinput=document.querySelector("#input");
    const newTodo= Taskinput.value;
 
    if(newTodo.trim()!=""){
        ToDoItems.push(newTodo);
        Taskinput.value="";
        localStorage.setItem("todoItems",JSON.stringify(ToDoItems));
        loadCards();
        }
};
const deleteTodo=(task)=>{
   const indexOfItem=ToDoItems.indexOf(task);
   if(indexOfItem>-1){
    ToDoItems.splice(indexOfItem,1);
    localStorage.setItem("todoItems",JSON.stringify(ToDoItems));
    loadCards();
   }
}