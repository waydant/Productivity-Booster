<<<<<<< HEAD
 
=======
>>>>>>> ffb10afa1501a3540303f9e0c60be53d855602f1
//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');
<<<<<<< HEAD
const filterOption = document.querySelector(".filter-todo");
 
//Event Listener
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click', addTodo);
todolist.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTodo);
 
//functions
function addTodo(event){
  
   //prevent form from submitting
   event.preventDefault();
 
   //Todo DIV
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
  
   //Create LI
   const newToDo = document.createElement('li');
   newToDo.innerText = todoInput.value;
   newToDo.classList.add('todo-item');
   todoDiv.appendChild(newToDo);
  
   //ADD TODO TO LOCAL STORAGE
   saveLocalTodos(todoInput.value);
 
   //Check MARK BUTTON
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);
  
   //Check TRASH BUTTON
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);
  
   //APPEND TO LIST
   todolist.appendChild(todoDiv);
  
   //clear  todo INPUT Value
   todoInput.value ="";
 
}
 
function deleteCheck(e){
   // console.log(e.target);
   const item = e.target;
 
   //DELETE
   if(item.classList[0]==='trash-btn'){
       const todo = item.parentElement;
       //Animation
       todo.classList.add('fall');
       removeLocalTodos(todo);
       todo.addEventListener('transitionend', function(){
           todo.remove();
       });
   }
 
   //CHECK MARK
   if(item.classList[0]==='complete-btn'){
       const todo = item.parentElement;
       todo.classList.toggle("completed");
   }
 
}
 
function filterTodo(e){
   const todos = todolist.childNodes;
   // console.log(todos);
   todos.forEach(function(todo){
       switch(e.target.value){
           case "all":
               todo.style.display = "none";
               break;
           case "completed":
               if(todo.classList.contains('completed')){
                   todo.style.display = 'flex';
               }else{
                   todo.style.display = "none";
               }
               break;
           case "uncompleted":
               if(todo.classList.contains('completed')){
                   todo.style.display = 'none';
               }else{
                   todo.style.display="flex";
               }
               break;
       }
   });
};
 
function saveLocalTodos(todo){
   //Check --- hey do i already have things in there?
 
   let todos;
   if(localStorage.getItem('todos')===null){
       todos = [];
   }else{
       todos = JSON.parse(localStorage.getItem("todos"));
   }
   todos.push(todo);
   localStorage.setItem("todos", JSON.stringify(todos));
}
 
function getTodos(){
   //Check --- hey do i already have things in there?
 
   let todos;
   if(localStorage.getItem('todos')===null){
       todos = [];
   }else{
       todos = JSON.parse(localStorage.getItem("todos"));
   }
   todos.forEach(function(todo){
   //Todo DIV
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
  
   //Create LI
   const newToDo = document.createElement('li');
   newToDo.innerText = todo;
   newToDo.classList.add('todo-item');
   todoDiv.appendChild(newToDo);
 
   //Check MARK BUTTON
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);
  
   //Check TRASH BUTTON
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);
  
   //APPEND TO LIST
   todolist.appendChild(todoDiv);
   });
}
 
function removeLocalTodos(todo){
   //Check --- hey do i already have things in there?
 
   let todos;
   if(localStorage.getItem('todos')===null){
       todos = [];
   }else{
       todos = JSON.parse(localStorage.getItem("todos"));
   }
   const todoIndex = todo.children[0].innerText;
   todos.splice(todos.indexOf(todoIndex),1);
   localStorage.setItem("todos", JSON.stringify(todos));
}
=======

//Event Listener
todoButton.addEventListener('click', addTodo);


//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    //Check MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todolist.appendChild(todoDiv);
    //clear  todo INPUT Value
    todoInput.value ="";
}
>>>>>>> ffb10afa1501a3540303f9e0c60be53d855602f1
