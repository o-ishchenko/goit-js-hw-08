// Add imports above this line
import { galleryItems } from './gallery-items';
console.log(galleryItems);
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const pictureMarkup = createPictureMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', pictureMarkup);



function createPictureMarkup(items) {
    return items.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}" />
        </a>
        `;
    }).join('');
};
new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});