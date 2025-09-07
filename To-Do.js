const ToDoItems=["a","b","c","d"];

const localCards=()=>{
    const containerElement=document.querySelector("#container");
    containerElement.innerHTML="";
    for(const ToDoItem of ToDoItems){
        containerElement.innerHTML+=`<div class="item">
        ${ToDoItem} <img src="./Images/trash.png" class="delete-icon">
        </div>`;

    }
};
localCards();
const AddToDo=()=>{
    const Taskinput=document.querySelector("#input");
    const AddToDo =Taskinput.value;
    ToDoItems.push(AddToDo);
    Taskinput.value="";
    localCards();
}