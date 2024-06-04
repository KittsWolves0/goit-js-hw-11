// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const BASE_URL = "https://pixabay.com/api/";
export const form = document.querySelector(".form");

const params = new URLSearchParams({
    key: "44202193-f248306df09f9efdc8529d868",
    q: form.elements.search.value,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
})



export const fetchResearch = () => {
    return fetcher(BASE_URL, params)
            .then(data => console.log(data))
};

function fetcher (url, params) {
    return fetch(`${url}?${params}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json();
        })
        .catch(error => {
            console.log(error);
        })
}