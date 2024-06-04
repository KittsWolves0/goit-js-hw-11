const gallery = document.querySelector(".list");

export const renderGallery = (arr) =>  {
    return arr.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads, id}) => {
        `<li class="list-item">
        <a class="list-link" href="${largeImageURL}">
          <img
            class="list-img"
            src="${webformatURL}"
            alt="${tags}"
            width="360"
          />
          <ul class="img-list">
            <li class="img-titles">
              <h3>Likes</h3>
              <p>${likes}</p>
            </li>
            <li class="img-titles">
              <h3>Views</h3>
              <p>${views}</p>
            </li>
            <li class="img-titles">
              <h3>Comments</h3>
              <p>${comments}</p>
            </li>
            <li class="img-titles">
              <h3>Downloads</h3>
              <p>${downloads}</p>
            </li>
          </ul>
        </a>
      </li>`
}).join("");
}