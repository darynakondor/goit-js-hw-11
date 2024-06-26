import { getGallery } from "./js/pixabay-api";
import {renderPhotosList} from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader')

form.addEventListener('submit', function(ev){
    ev.preventDefault();
    const inputValue = this.elements['search'].value;
    gallery.innerHTML = '';
    loader.style.display = 'block'
    if(inputValue !== '') {
        getGallery(inputValue).then(data => {
            renderPhotosList(data.hits);
            loader.style.display = 'none'
            if(!data.hits.length) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight'
                });
            }
            lightbox.refresh()
        })
    }
})

gallery.addEventListener('click', (e) => {
    e.preventDefault();
});

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });



