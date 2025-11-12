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

import refs from "./refs.js";


refs.button.addEventListener("click", onClick);
document.addEventListener("DOMContentLoaded", renderPage);


function onClick() {
  const tema = refs.body.classList.contains("theme-light")
  ? "theme-dark"
  : "theme-light";
  refs.body.classList.remove("theme-light", "theme-dark");
  refs.body.classList.add(tema);

   
  addTolocalStorage("switcher", tema);
   
      
};


function renderPage() {
  const lsData = getFromLocalStorage("switcher");
  if (lsData === "theme-dark") {
    refs.body.classList.replace("theme-light", "theme-dark");

  } else {
     refs.body.classList.replace("theme-dark", "theme-light");
  }
}
renderPage();