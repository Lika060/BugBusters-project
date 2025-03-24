import{g as d,T as q,A as M,r as B,i as u,S as I,a as O}from"./assets/vendor-BUj_-Ysr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();(()=>{const e=document.querySelector(".js-menu"),t=document.querySelector(".js-menu"),s=document.querySelector(".js-menu-close"),r=document.querySelector(".nav-list");t.addEventListener("click",n),s.addEventListener("click",n);function n(){const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),document.body.classList.toggle("is-open")}r.addEventListener("click",o=>{o.target.nodeName==="A"&&o.target.nodeName==="A"&&(e.classList.remove("is-open"),document.body.classList.remove("is-open"))})})();const T=document.querySelector(".scroll-to-top");T.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.onscroll=()=>D();function D(){const e=document.querySelector(".scroll-to-top");window.scrollY>60?e.classList.remove("js-transparent"):e.classList.add("js-transparent")}document.addEventListener("DOMContentLoaded",()=>{d.registerPlugin(q);const e=["Fullstack Developer","JavaScript Developer","Frontend Developer","Backend Developer"],t=document.querySelector(".hero-hi"),s=document.querySelector(".hero-label");if(!t||!s){console.error("Required elements for animation not found");return}d.from(".hero-hi",{y:100,duration:1,delay:1,ease:"power3.out",onComplete:()=>{r.play()}});const r=d.timeline({repeat:-1}).pause();e.forEach(n=>{const o=d.timeline({repeat:1,yoyo:!0,repeatDelay:.5});o.to(".hero-label",{duration:2,text:n}),r.add(o)})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll("img.lazy");if("IntersectionObserver"in window){const t=new IntersectionObserver((s,r)=>{s.forEach(n=>{if(n.isIntersecting){const o=n.target;o.dataset.src&&(o.src=o.dataset.src,o.addEventListener("error",()=>{console.warn(`Failed to load image: ${o.dataset.src}`)},{once:!0}),r.unobserve(o))}})},{rootMargin:"100px"});e.forEach(s=>{t.observe(s)})}else e.forEach(t=>{t.dataset.src&&(t.src=t.dataset.src)})});const P=[{name:"wallet webservice",image:{"1x":"./img/myproject/1.webp","2x":"./img/myproject/1@2x.webp"}},{name:"Green harvest webservice",image:{"1x":"/img/myproject/2.webp","2x":"/img/myproject/2@2x.webp"}},{name:"English Exellence webservice",image:{"1x":"/img/myproject/3.webp","2x":"/img/myproject/3@2x.webp"}},{name:"starlight studio landing page",image:{"1x":"/img/myproject/4.webp","2x":"/img/myproject/4@2x.webp"}},{name:"energy flow webservice ",image:{"1x":"/img/myproject/5.webp","2x":"/img/myproject/5@2x.webp"}},{name:"fruitbox online store",image:{"1x":"/img/myproject/6.webp","2x":"/img/myproject/6@2x.webp"}},{name:"chego jewelry website",image:{"1x":"/img/myproject/7.webp","2x":"/img/myproject/7@2x.webp"}},{name:"Mimino website",image:{"1x":"/img/myproject/8.webp","2x":"/img/myproject/8@2x.webp"}},{name:"vyshyvanka vibes Landing Page",image:{"1x":"/img/myproject/9.webp","2x":"/img/myproject/9@2x.webp"}},{name:"power pulse webservice ",image:{"1x":"/img/myproject/10.webp","2x":"/img/myproject/10@2x.webp"}}],c={projects:P},$="/BugBusters-project/assets/sprite-zPOd-tSv.svg",g=document.querySelector(".project-list"),l=document.querySelector(".load-more");"scrollRestoration"in history&&(history.scrollRestoration="manual");let p=3;function A({image:e,name:t}){return`
    <li class='not-visible '>
      <picture>
        <source srcset="${e["1x"]} 1x, ${e["2x"]} 2x" />
        <img class='project-img' src="${e["1x"]}"  alt="${t}" loading="lazy" />
      </picture>
      <p class="item-subtext">React, JavaScript, Node JS, Git</p>
      <div class="container-txt-btn">
        <p class="item-text">${t}</p>
        <div class='project-icon-div'>
        <a class="item-btn-grey" href="https:/github.com/Lika060/BugBusters-project" target="_blank">
          <span class='visit'>VISIT</span>
          <svg class="btn-grey-icon" width="24" height="24">
            <use href="${$}#icon-icon"></use>
          </svg>
        </a>
        </div>
      </div>
    </li>
  `}function x(e=0,t=2){if(!g)return;const s=c.projects.slice(e,t+1).map(A).join("");g.insertAdjacentHTML("beforeend",s),C()}function C(){if(!g)return;const e=g.querySelectorAll(".not-visible");!e||e.length===0||e.forEach((t,s)=>{setTimeout(()=>t.classList.add("visible"),s*50)})}function L(){if(!l||!c.projects||c.projects.length===0)return;const e=p+3,t=Math.min(e-1,c.projects.length-1);x(p,t),p=e,p>=c.projects.length&&(l.classList.add("is-hidden"),l.removeEventListener("click",L)),window.scrollBy({top:500,behavior:"smooth"})}l&&l.addEventListener("click",L);c&&c.projects&&c.projects.length>0?x(0,2):console.error("Data is missing or projects array is empty");new M(".accordion-container",{collapse:!0,openOnInit:[0]});B();const b=document.querySelector(".swiper");let a;const z=async()=>{try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(`HTTP Error: ${e.status}`);return await e.json()}catch(e){return console.error("Failed to fetch reviews:",e),[]}},N=e=>`
    <li class="swiper-slide" id="slide">
        <p class="review-comment">${e.review}</p>
        <div class="review-info">
          <img class="review-photo" src="${e.avatar_url}" alt="User photo" width="40" height="40" loading="lazy"/>
          <h3 class="review-name">${e.author}</h3>
        </div>
    </li>`,V=async()=>{const e=await z();if(!e.length){b.innerHTML="<p>Not found</p>",u.error({message:"Reviews cannot be loaded at this time.",position:"bottomRight"});return}const t=e.map(s=>N(s)).join("");b.querySelector(".swiper-wrapper").innerHTML=t,a=new I(".swiper",{slidesPerView:1,spaceBetween:10,grabCursor:!0,slideToClickedSlide:!0,speed:800,keyboard:{enabled:!0},mousewheel:{enabled:!0},navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},breakpoints:{768:{slidesPerView:1,spaceBetween:12},1280:{slidesPerView:2,spaceBetween:32}},autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!0},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},on:{slideChange:()=>{j()}}}),j()};function j(){if(!a)return;const e=document.querySelector(".reviews-btn-right"),t=document.querySelector(".reviews-btn-left");e.disabled=a.isEnd,t.disabled=a.isBeginning;const s=document.querySelector(".js-btn-left"),r=document.querySelector(".js-btn-right");s.style.transition="none",r.style.transition="none",a.isEnd&&(r.style.stroke="#e4e5e6",s.style.stroke="#292929"),a.isBeginning&&(s.style.stroke="#e4e5e6",r.style.stroke="#292929"),!a.isEnd&&!a.isBeginning&&(s.style.stroke="#292929",r.style.stroke="#292929"),e.classList.toggle("disabled",a.isEnd),t.classList.toggle("disabled",a.isBeginning)}V();const w=document.querySelector("#work-together-form"),H=document.querySelector("#work-together-modal-window");w.elements;w.addEventListener("submit",G);function R(e){const{email:t,message:s}=e.elements;return!!(t.value.trim()&&s.value.trim())}function F(e){document.body.classList.add("modal-open"),H.classList.remove("visually-hidden")}async function J(e){const{email:t,message:s}=e.elements,r={email:t.value.trim(),comment:s.value.trim()};return await O.post("https://portfolio-js.b.goit.study/api/requests",r).then(i=>i.data).then(i=>F()).catch(i=>{i.response.data?u.error(i.response.data):u.error(i)})}async function Q(e){e.elements,await J(e).then(t=>{})}function G(e){e.preventDefault(),R(w)?Q(w):u.warning({message:"Error"})}let S=!1,m=!1,f;const v=document.createElement("div");v.id="map";function E(){const e=window.innerWidth>=1280,t=document.getElementById(e?"map-desktop":"map-mobile");let s=t.querySelector(".map-wrapper");return s||(s=document.createElement("div"),s.className="map-wrapper",t.appendChild(s)),s.contains(v)||(s.innerHTML="",s.appendChild(v)),s}async function k(e){return await(await fetch(`styles/map-${e}.json`)).json()}window.initMap=async function(){const t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",s=await k(t);f=new google.maps.Map(document.getElementById("map"),{center:{lat:40.61589475533107,lng:-74.0637538196986},zoom:12,styles:s}),new google.maps.Marker({position:{lat:40.61589475533107,lng:-74.0637538196986},map:f,title:"I am here!"}),S=!0};document.getElementById("show-map-btn").addEventListener("click",function(e){e.preventDefault();const t=E();if(m)t.classList.remove("active"),m=!1;else if(t.classList.add("active"),m=!0,S)window.initMap();else{const s=document.createElement("script");s.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCb8Bd-wNJ4DBDnQ5x1K5J8QeJZBgudncA&callback=initMap",s.async=!0,s.defer=!0,document.head.appendChild(s)}});window.addEventListener("resize",()=>{m&&E().classList.add("active")});window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",async e=>{const t=e.matches?"dark":"light",s=await k(t);f.setOptions({styles:s})});const K=document.querySelector("#close-modal-button"),y=document.querySelector("#work-together-modal-window"),W=document.querySelector("#work-together-form");function h(e){e.preventDefault(),y.classList.add("visually-hidden"),document.body.classList.remove("modal-open"),W.reset()}K.addEventListener("click",h);y.addEventListener("click",function(e){e.target===y&&h(e)});document.addEventListener("keydown",function(e){y.classList.contains("visually-hidden")||(e.key==="Escape"||e.key==="Enter")&&h(e)});
//# sourceMappingURL=index.js.map
