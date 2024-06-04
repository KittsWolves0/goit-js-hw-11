// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


import { form } from "./js/pixabay-api";
import { fetchResearch } from "./js/pixabay-api";



form.addEventListener("submit", hendleSearch);

function hendleSearch(event) {
    event.preventDefault();
    fetchResearch(event.currentTarget.elements.search.value);
}
