import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const itemContainer = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
  <a class="gallery__link" href="${original}" onclick="return false;">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("");
itemContainer.insertAdjacentHTML("beforeend", markup);


itemContainer.addEventListener("click", function(event) {
  event.preventDefault();

  if (event.target.tagName === 'IMG') {
    const originalImageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${originalImageUrl}">
    `);

    instance.show();
  }
});
