// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const thumbnailItems = document.querySelectorAll('.gallery__thumbnail-item');
const mainImage = document.querySelector('.gallery__main-image img');

thumbnailItems.forEach((item) => {
    item.addEventListener('click', () => {
        const thumbnailImageSrc = item.querySelector('img').src;
        mainImage.src = thumbnailImageSrc;
    });
});
