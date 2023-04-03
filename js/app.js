const addTodoBtn = document.querySelector(".add-todo");
const inputTodo = document.querySelector(".input-todo");
const todoList = document.querySelector(".todo-list");

addTodoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(e) {
  e.preventDefault();
  const item = inputTodo.value;
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo-item");

  newTodo.innerHTML = `
    <li>${item}</li>
    <button class="check-button">
         <i class="fa-solid fa-check" style="color: #00fa1d"></i>
    </button>
    <button class="trash-button">
         <i class="fa-solid fa-trash" style="color: #eb0000"></i>
    </button>
  `;

  todoList.appendChild(newTodo);
  inputTodo.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "check-button") {
    const todo = item.parentElement;
    todo.classList.toggle("done");
  }
}
