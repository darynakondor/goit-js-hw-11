import{i as p,S as f}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",m="44594941-2a4acc61a8cc3b7fa403a0877";function y(s){const r={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0},o=new URLSearchParams(r).toString(),l=`${d}?${o}`;return fetch(l).then(e=>e.json()).catch(e=>{console.error(e)})}const h=document.querySelector(".gallery");function g(s){let r="";s.forEach(({webformatURL:o,largeImageURL:l,tags:e,likes:t,views:i,comments:c,downloads:u})=>r+=`<li class="gallery-item">
            <a class="gallery-link" href="${l}">
              <img
                class="gallery-image"
                src="${o}"
                alt="${e}"
              />
            </a>
            <ul class="info">
                <li class="item">
                    <p class="bold">Likes</p>
                    <p>${t}</p>
                </li>
                <li class="item">
                    <p class="bold">Views</p>
                    <p>${i}</p>
                </li>
                <li class="item">
                    <p class="bold">Comments</p>
                    <p>${c}</p>
                </li>
                <li class="item">
                    <p class="bold">Downloads</p>
                    <p>${u}</p>
                </li>
            </ul>
        </li>
    `),h.insertAdjacentHTML("beforeend",r)}const b=document.querySelector(".form"),n=document.querySelector(".gallery"),a=document.querySelector(".loader");b.addEventListener("submit",function(s){s.preventDefault();const r=this.elements.search.value;n.innerHTML="",a.style.display="block",r!==""&&y(r).then(o=>{g(o.hits),a.style.display="none",o.hits.length||p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),L.refresh()})});n.addEventListener("click",s=>{s.preventDefault()});var L=new f(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
