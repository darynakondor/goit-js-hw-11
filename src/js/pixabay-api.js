const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44594941-2a4acc61a8cc3b7fa403a0877';

export function getGallery(tag) {
    const params = {
        key: API_KEY,
        q: tag,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    };
    const urlParams = new URLSearchParams(params).toString();
    const url = `${BASE_URL}?${urlParams}`;

    return fetch(url)
        .then(res => res.json())
        .catch(error => {
            console.error(error);
        });
}