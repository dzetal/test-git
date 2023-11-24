import { addToFavorites } from "./component.js";

document.addEventListener("DOMContentLoaded", () => {
  let row;
  const button = document.querySelectorAll('.favorite'); // Récupère l'élément du bouton
  for (row of button) {
    row.addEventListener('click', addToFavorites); //affecter la même fonction
  }
});