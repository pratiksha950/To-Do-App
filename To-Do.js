const ToDoItems=["a","b","c","d"];

const localCards=()=>{
    const containerElement=document.querySelector("#container");
    for(const ToDoItem of ToDoItems){
        containerElement.innerHTML+=`<div class="item">
        ${ToDoItem} <img src="./Images/trash.png" class="delete-icon">
        </div>`;

    }
};
localCards();