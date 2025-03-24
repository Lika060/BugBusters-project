import{g as d,T as M,A as B,r as I,i as g,S as O,a as T}from"./assets/vendor-BUj_-Ysr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();(()=>{const e=document.querySelector(".js-menu"),t=document.querySelector(".js-menu"),s=document.querySelector(".js-menu-close"),r=document.querySelector(".nav-list");t.addEventListener("click",o),s.addEventListener("click",o);function o(){const n=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),document.body.classList.toggle("is-open")}r.addEventListener("click",n=>{n.target.nodeName==="A"&&n.target.nodeName==="A"&&(e.classList.remove("is-open"),document.body.classList.remove("is-open"))})})();const D=document.querySelector(".scroll-to-top");D.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.onscroll=()=>P();function P(){const e=document.querySelector(".scroll-to-top");window.scrollY>60?e.classList.remove("js-transparent"):e.classList.add("js-transparent")}document.addEventListener("DOMContentLoaded",()=>{d.registerPlugin(M);const e=["Fullstack Developer","JavaScript Developer","Frontend Developer","Backend Developer"],t=document.querySelector(".hero-hi"),s=document.querySelector(".hero-label");if(!t||!s){console.error("Required elements for animation not found");return}d.from(".hero-hi",{y:100,duration:1,delay:1,ease:"power3.out",onComplete:()=>{r.play()}});const r=d.timeline({repeat:-1}).pause();e.forEach(o=>{const n=d.timeline({repeat:1,yoyo:!0,repeatDelay:.5});n.to(".hero-label",{duration:2,text:o}),r.add(n)})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll("img.lazy");if("IntersectionObserver"in window){const t=new IntersectionObserver((s,r)=>{s.forEach(o=>{if(o.isIntersecting){const n=o.target;n.dataset.src&&(n.src=n.dataset.src,n.addEventListener("error",()=>{console.warn(`Failed to load image: ${n.dataset.src}`)},{once:!0}),r.unobserve(n))}})},{rootMargin:"100px"});e.forEach(s=>{t.observe(s)})}else e.forEach(t=>{t.dataset.src&&(t.src=t.dataset.src)})});const $=[{name:"wallet webservice",image:{"1x":"/img/myproject/1.jpg","2x":"/img/myproject/1@2x.jpg"}},{name:"Green harvest webservice",image:{"1x":"/img/myproject/2.jpg","2x":"/img/myproject/2@2x.jpg"}},{name:"English Exellence webservice",image:{"1x":"/img/myproject/3.jpg","2x":"/img/myproject/3@2x.jpg"}},{name:"starlight studio landing page",image:{"1x":"/img/myproject/4.jpg","2x":"/img/myproject/4@2x.jpg"}},{name:"energy flow webservice ",image:{"1x":"/img/myproject/5.jpg","2x":"/img/myproject/5@2x.jpg"}},{name:"fruitbox online store",image:{"1x":"/img/myproject/6.jpg","2x":"/img/myproject/6@2x.jpg"}},{name:"chego jewelry website",image:{"1x":"/img/myproject/7.jpg","2x":"/img/myproject/7@2x.jpg"}},{name:"Mimino website",image:{"1x":"/img/myproject/8.jpg","2x":"/img/myproject/8@2x.jpg"}},{name:"vyshyvanka vibes Landing Page",image:{"1x":"/img/myproject/9.jpg","2x":"/img/myproject/9@2x.jpg"}},{name:"power pulse webservice ",image:{"1x":"/img/myproject/10.jpg","2x":"/img/myproject/10@2x.jpg"}}],c={projects:$},C="/BugBusters-project/assets/sprite-zPOd-tSv.svg",f=document.querySelector(".project-list"),l=document.querySelector(".load-more");"scrollRestoration"in history&&(history.scrollRestoration="manual");let p=3;function A({image:e,name:t}){return`
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
            <use href="${C}#icon-icon"></use>
          </svg>
        </a>
        </div>
      </div>
    </li>
  `}function L(e=0,t=2){if(!f)return;const s=c.projects.slice(e,t+1).map(A).join("");f.insertAdjacentHTML("beforeend",s),z()}function z(){if(!f)return;const e=f.querySelectorAll(".not-visible");!e||e.length===0||e.forEach((t,s)=>{setTimeout(()=>t.classList.add("visible"),s*50)})}function S(){if(!l||!c.projects||c.projects.length===0)return;const e=p+3,t=Math.min(e-1,c.projects.length-1);L(p,t),p=e,p>=c.projects.length&&(l.classList.add("is-hidden"),l.removeEventListener("click",S)),window.scrollBy({top:500,behavior:"smooth"})}l&&l.addEventListener("click",S);c&&c.projects&&c.projects.length>0?L(0,2):console.error("Data is missing or projects array is empty");new B(".accordion-container",{collapse:!0,openOnInit:[0]});I();const j=document.querySelector(".swiper");let a;const N=async()=>{try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(`HTTP Error: ${e.status}`);return await e.json()}catch(e){return console.error("Failed to fetch reviews:",e),[]}},V=e=>`
    <li class="swiper-slide" id="slide">
        <p class="review-comment">${e.review}</p>
        <div class="review-info">
          <img class="review-photo" src="${e.avatar_url}" alt="User photo" width="40" height="40" loading="lazy"/>
          <h3 class="review-name">${e.author}</h3>
        </div>
    </li>`,H=async()=>{const e=await N();if(!e.length){j.innerHTML="<p>Not found</p>",g.error({message:"Reviews cannot be loaded at this time.",position:"bottomRight"});return}const t=e.map(s=>V(s)).join("");j.querySelector(".swiper-wrapper").innerHTML=t,a=new O(".swiper",{slidesPerView:1,spaceBetween:10,grabCursor:!0,slideToClickedSlide:!0,speed:800,keyboard:{enabled:!0},mousewheel:{enabled:!0},navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},breakpoints:{768:{slidesPerView:1,spaceBetween:12},1280:{slidesPerView:2,spaceBetween:32}},autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!0},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},on:{slideChange:()=>{x()}}}),x()};function x(){if(!a)return;const e=document.querySelector(".reviews-btn-right"),t=document.querySelector(".reviews-btn-left");e.disabled=a.isEnd,t.disabled=a.isBeginning;const s=document.querySelector(".js-btn-left"),r=document.querySelector(".js-btn-right");s.style.transition="none",r.style.transition="none",a.isEnd&&(r.style.stroke="#e4e5e6",s.style.stroke="#292929"),a.isBeginning&&(s.style.stroke="#e4e5e6",r.style.stroke="#292929"),!a.isEnd&&!a.isBeginning&&(s.style.stroke="#292929",r.style.stroke="#292929"),e.classList.toggle("disabled",a.isEnd),t.classList.toggle("disabled",a.isBeginning)}H();const y=document.querySelector("#work-together-form"),R=document.querySelector("#work-together-modal-window"),{email:m,message:Z,button:X}=y.elements;y.addEventListener("submit",W);m.addEventListener("input",F);function F(){m.validity.valid&&(m.textContent="✔",m.classList.add("valid"))}function J(e){const{email:t,message:s}=e.elements;return!!(t.value.trim()&&s.value.trim())}function Q(e){document.body.classList.add("modal-open"),R.classList.remove("visually-hidden")}async function G(e){const{email:t,message:s}=e.elements,r={email:t.value.trim(),comment:s.value.trim()};return await T.post("https://portfolio-js.b.goit.study/api/requests",r).then(i=>i.data).then(i=>Q()).catch(i=>{i.response.data?g.error(i.response.data):g.error(i)})}async function K(e){e.elements,await G(e).then(t=>{})}function W(e){e.preventDefault(),J(y)?K(y):g.warning({message:"Error"})}let E=!1,u=!1,w;const h=document.createElement("div");h.id="map";function k(){const e=window.innerWidth>=1280,t=document.getElementById(e?"map-desktop":"map-mobile");let s=t.querySelector(".map-wrapper");return s||(s=document.createElement("div"),s.className="map-wrapper",t.appendChild(s)),s.contains(h)||(s.innerHTML="",s.appendChild(h)),s}async function q(e){return await(await fetch(`styles/map-${e}.json`)).json()}window.initMap=async function(){const t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",s=await q(t);w=new google.maps.Map(document.getElementById("map"),{center:{lat:40.61589475533107,lng:-74.0637538196986},zoom:12,styles:s}),new google.maps.Marker({position:{lat:40.61589475533107,lng:-74.0637538196986},map:w,title:"I am here!"}),E=!0};document.getElementById("show-map-btn").addEventListener("click",function(e){e.preventDefault();const t=k();if(u)t.classList.remove("active"),u=!1;else if(t.classList.add("active"),u=!0,E)window.initMap();else{const s=document.createElement("script");s.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCb8Bd-wNJ4DBDnQ5x1K5J8QeJZBgudncA&callback=initMap",s.async=!0,s.defer=!0,document.head.appendChild(s)}});window.addEventListener("resize",()=>{u&&k().classList.add("active")});window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",async e=>{const t=e.matches?"dark":"light",s=await q(t);w.setOptions({styles:s})});const _=document.querySelector("#close-modal-button"),v=document.querySelector("#work-together-modal-window"),U=document.querySelector("#work-together-form");function b(e){e.preventDefault(),v.classList.add("visually-hidden"),document.body.classList.remove("modal-open"),U.reset()}_.addEventListener("click",b);v.addEventListener("click",function(e){e.target===v&&b(e)});document.addEventListener("keydown",function(e){v.classList.contains("visually-hidden")||(e.key==="Escape"||e.key==="Enter")&&b(e)});
//# sourceMappingURL=index.js.map
