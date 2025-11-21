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