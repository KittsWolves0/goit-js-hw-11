const gallery = document.querySelector(".list");

export const renderGallery = ({hits}) =>  {
    return hits.map(item => {
        `<li class="list-item">
        <a class="list-link" href="">
          <img
            class="list-img"
            src="https://pbs.twimg.com/profile_images/1645415067310252039/0Uk7lKSa_400x400.jpg"
            alt="dino"
            width="360"
          />
          <ul class="img-list">
            <li class="img-titles">
              <h3>Likes</h3>
              <p>1</p>
            </li>
            <li class="img-titles">
              <h3>Views</h3>
              <p>c</p>
            </li>
            <li class="img-titles">
              <h3>Comments</h3>
              <p>c</p>
            </li>
            <li class="img-titles">
              <h3>Downloads</h3>
              <p>c</p>
            </li>
          </ul>
        </a>
      </li>`
    })
}