/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
import { 
  addTolocalStorage, 
  getFromLocalStorage, 
} from "./localStorageApi.js";


const form = document.querySelector("#task-form");
const taskNameInput = form.elements.taskName;
const taskTextInput = form.elements.taskDescription;

const addButton = document.querySelector(".header-form-btn");



taskNameInput.addEventListener("input", onInputNameChange);
taskTextInput.addEventListener("input", onInputTextChange);
addButton.addEventListener("click", handleAddTask);

function onInputNameChange(event) {
  const textValue = event.target.value;
  addTolocalStorage("taskName", textValue);
   

}

function onInputTextChange(event) {
  const textValue = event.target.value;
  addTolocalStorage("taskText", textValue);
   

}

function handleAddTask(event) {
  event.preventDefault();

  if (taskTextInput.value === "" || taskNameInput.value === "") {
    return alert("Введіть назву та текст завдання");
  }

  const taskName = getFromLocalStorage("taskName");
  const taskText = getFromLocalStorage("taskText");

  // шукаємо список
  const items = document.querySelectorAll("#task-list li");

  for (const li of items) {
    const title = li.querySelector("h3");
    const desc = li.querySelector("p");

    if (title && title.textContent.trim() === "Заголовок") {
      title.textContent = taskName;
      desc.textContent = taskText;
      break; // знайшли перший — змінюємо і виходимо
    }
  }

  // очищаємо
  localStorage.removeItem("taskText");
  localStorage.removeItem("taskName");
  taskNameInput.value = "";
  taskTextInput.value = "";
}
