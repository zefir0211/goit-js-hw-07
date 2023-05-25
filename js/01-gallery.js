import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const itemContainer = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("");
itemContainer.insertAdjacentHTML("beforeend", markup);