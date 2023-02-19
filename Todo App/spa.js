//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo)
todolist.addEventListener('click', deletecheck)
todolist.addEventListener('click', completecheck)


//functions

function addTodo(event){
// this is the entire function for generating a new todo
    //prevents form from submitting / refreshing page
    event.preventDefault();

    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create Li

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CHECk MARK BUTTON

    const completedButton = document.createElement("button");
    completedButton.innerHTML ='<i class="fas fa-check"></i>';   /*  Button images added here */
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);


    //TRASH BUTTON

    const trashButton = document.createElement("button");
    trashButton.innerHTML ='<i class="fas fa-trash"></i>';    /*  Button images added here */
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //after writing this, added this div class todo to HTML
    // do this to append to list VVVVV
    todolist.appendChild(todoDiv);

    //clear the todo input value
    todoInput.value = "";


}

function deletecheck(e){
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
}

function completecheck(e){
    const item = e.target;
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}