import{g as l,T as O,i as a,A as P,r as I,S as $,a as z}from"./assets/vendor-CB8PsLOs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();(()=>{const e=document.querySelector(".js-menu"),t=document.querySelector(".js-menu"),s=document.querySelector(".js-menu-close"),n=document.querySelector(".nav-list");t.addEventListener("click",r),s.addEventListener("click",r);function r(){const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),document.body.classList.toggle("is-open")}n.addEventListener("click",o=>{o.target.nodeName==="A"&&o.target.nodeName==="A"&&(e.classList.remove("is-open"),document.body.classList.remove("is-open"))})})();const A=document.querySelector(".scroll-to-top");A.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.onscroll=()=>N();function N(){const e=document.querySelector(".scroll-to-top");window.scrollY>60?e.classList.remove("js-transparent"):e.classList.add("js-transparent")}document.addEventListener("DOMContentLoaded",()=>{l.registerPlugin(O);const e=["Fullstack Developer","JavaScript Developer","Frontend Developer","Backend Developer"],t=document.querySelector(".hero-hi"),s=document.querySelector(".hero-label");if(!t||!s){console.error("Required elements for animation not found");return}l.from(".hero-hi",{y:100,duration:1,delay:1,ease:"power3.out",onComplete:()=>{n.play()}});const n=l.timeline({repeat:-1}).pause();e.forEach(r=>{const o=l.timeline({repeat:1,yoyo:!0,repeatDelay:.5});o.to(".hero-label",{duration:2,text:r}),n.add(o)})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll("img.lazy");if("IntersectionObserver"in window){const t=new IntersectionObserver((s,n)=>{s.forEach(r=>{if(r.isIntersecting){const o=r.target;o.dataset.src&&(o.src=o.dataset.src,o.addEventListener("error",()=>{console.warn(`Failed to load image: ${o.dataset.src}`)},{once:!0}),n.unobserve(o))}})},{rootMargin:"100px"});e.forEach(s=>{t.observe(s)})}else e.forEach(t=>{t.dataset.src&&(t.src=t.dataset.src)})});const F="/BugBusters-project/assets/sprite-zPOd-tSv.svg",x="/BugBusters-project/assets/projects-desk-03-min-bAztutHK.png",V="/BugBusters-project/assets/projects-desk-03@2x-min-D7O6BJsL.png",H="/BugBusters-project/assets/projects-mob-03-min-BsXsyoM6.png",R="/BugBusters-project/assets/projects-mob-03@2x-min-tmcSzpo2.png",X="/BugBusters-project/assets/projects-tabl-03-min-ZgDTbOh9.png",J="/BugBusters-project/assets/projects-tabl-03@2x-min-Dqd8dn0C.png",w="/BugBusters-project/assets/projects-desk-04-min-yxZx66BP.png",K="/BugBusters-project/assets/projects-desk-04@2x-min-DHJNdR6B.png",Q="/BugBusters-project/assets/projects-mob-04-min-5yr3aGDi.png",W="/BugBusters-project/assets/projects-mob-04@2x-min-BeXemoj4.png",Z="/BugBusters-project/assets/projects-tabl-04-min-Dt9XScdK.png",U="/BugBusters-project/assets/projects-tabl-04@2x-min-B8Ml2TOY.png",y="/BugBusters-project/assets/projects-desk-05-min-CfD1cLSZ.png",Y="/BugBusters-project/assets/projects-desk-05@2x-min-BRPn2X1J.png",G="/BugBusters-project/assets/projects-mob-05-min-Db3py1Xm.png",ee="/BugBusters-project/assets/projects-mob-05@2x-min-B8zvmCB6.png",te="/BugBusters-project/assets/projects-tabl-05-min-F3tbbktz.png",se="/BugBusters-project/assets/projects-tabl-05@2x-min-BRqBFzgK.png",h="/BugBusters-project/assets/projects-desk-06-min-X_gqtJm5.png",oe="/BugBusters-project/assets/projects-desk-06@2x-min-Dj8eCfdF.png",re="/BugBusters-project/assets/projects-mob-06-min-C9QNW9Tj.png",ne="/BugBusters-project/assets/projects-mob-06@2x-min-DEtw7lg5.png",ce="/BugBusters-project/assets/projects-tabl-06-min-ugbcXMlD.png",ie="/BugBusters-project/assets/projects-tabl-06@2x-min-CmmfjQzn.png",v="/BugBusters-project/assets/projects-desk-07-min--lZv1p8n.png",ae="/BugBusters-project/assets/projects-desk-07@2x-min-DmSkXiQs.png",le="/BugBusters-project/assets/projects-mob-07-min-BSVWNsA-.png",pe="/BugBusters-project/assets/projects-mob-07@2x-min-Dd3dUvIN.png",ue="/BugBusters-project/assets/projects-tabl-07-min-CPlUFmPk.png",de="/BugBusters-project/assets/projects-tabl-07@2x-min-BDIDMcu4.png",k="/BugBusters-project/assets/projects-desk-08-min-xocuOah2.png",me="/BugBusters-project/assets/projects-desk-08@2x-min-BIWP6k6v.png",ge="/BugBusters-project/assets/projects-mob-08-min-DBYeKoNQ.png",je="/BugBusters-project/assets/projects-mob-08@2x-min-Ws78KLoX.png",be="/BugBusters-project/assets/projects-tabl-08-min-C_fZqAdW.png",Be="/BugBusters-project/assets/projects-tabl-08@2x-min-DRzjhCHA.png",S="/BugBusters-project/assets/projects-desk-09-min-DsvIyQeP.png",fe="/BugBusters-project/assets/projects-desk-09@2x-min-BvUdwZmo.png",xe="/BugBusters-project/assets/projects-mob-09-min-DX2Z5Nr9.png",we="/BugBusters-project/assets/projects-mob-09@2x-min-Cc_85EFK.png",ye="/BugBusters-project/assets/projects-tabl-09-min-DT00A0X5.png",he="/BugBusters-project/assets/projects-tabl-09@2x-min-BOveHSsW.png",L=[{alt:"Mimino website",img:x,sources:{mobile:{"1x":H,"2x":R},tablet:{"1x":X,"2x":J},desktop:{"1x":x,"2x":V}}},{alt:"Vyshyvanka vibes Landing Page",img:w,sources:{mobile:{"1x":Q,"2x":W},tablet:{"1x":Z,"2x":U},desktop:{"1x":w,"2x":K}}},{alt:"Power pulse webservice",img:y,sources:{mobile:{"1x":G,"2x":ee},tablet:{"1x":te,"2x":se},desktop:{"1x":y,"2x":Y}}},{alt:"Chego jewelry website",img:h,sources:{mobile:{"1x":re,"2x":ne},tablet:{"1x":ce,"2x":ie},desktop:{"1x":h,"2x":oe}}},{alt:"Energy flow webservice ",img:v,sources:{mobile:{"1x":le,"2x":pe},tablet:{"1x":ue,"2x":de},desktop:{"1x":v,"2x":ae}}},{alt:"Starlight studio landing page",img:k,sources:{mobile:{"1x":ge,"2x":je},tablet:{"1x":be,"2x":Be},desktop:{"1x":k,"2x":me}}},{alt:"Fruitbox online store",img:S,sources:{mobile:{"1x":xe,"2x":we},tablet:{"1x":ye,"2x":he},desktop:{"1x":S,"2x":fe}}}],ve=document.querySelector(".projects-list_img"),u=document.querySelector(".projects-button_loading"),ke=document.querySelector(".box-loader");let p=0,D=3;u.addEventListener("click",Se);function Se(){try{j(u,!1),M(!0);const t=L.slice(p,p+3);ve.insertAdjacentHTML("beforeend",Le(t)),p+=t.length,De(),j(u,!0),p>=L.length&&j(u,!1)}catch{Me("❌ Sorry, there was a server error. Please try again later!")}finally{M(!1)}}function Le(e){return e.map(({alt:t,img:s,sources:{mobile:n,tablet:r,desktop:o}})=>`
      <li>
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="${n["1x"]} 1x, ${n["2x"]} 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcset="${r["1x"]} 1x, ${r["2x"]} 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcset="${o["1x"]} 1x, ${o["2x"]} 2x"
          />
          <img
            class="projects-img"
            src="${s}"
            alt="${t}"
          />
        </picture>  
        <div class="projects-blok_descr">
          <p class="projects-img_descr">React, JavaScript, Node JS, Git</p>
          <div class="projects-box_descr">
            <h3 class="projects-img_title">${t}</h3>
            <a
              href="https://lika060.github.io/BugBusters-project/"
              class="projects-button_link"
              target="_blank"
            >
              <span class="projects-button_text">VISIT</span>
              <svg class="projects-button_icon" width="24" height="24">
                <use href="${F}#icon-arrow"></use>
              </svg>
            </a>
          </div>
        </div> 
      </li>`).join("")}function De(){const t=document.querySelectorAll(".projects-list_img > li")[D];t&&t.scrollIntoView({behavior:"smooth",block:"start"}),D+=3}function j(e,t){e.style.display=t?"block":"none"}function M(e){ke.style.display=e?"block":"none"}function Me(e){a.show({message:e,color:"red",position:"topRight",timeout:2e3})}new P(".accordion-container",{collapse:!0,openOnInit:[0]});I();const E=document.querySelector(".swiper");let i;const Ee=async()=>{try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(`HTTP Error: ${e.status}`);return await e.json()}catch(e){return console.error("Failed to fetch reviews:",e),[]}},Te=e=>`
    <li class="swiper-slide" id="slide">
        <p class="review-comment">${e.review}</p>
        <div class="review-info">
          <img class="review-photo" src="${e.avatar_url}" alt="User photo" width="40" height="40" loading="lazy"/>
          <h3 class="review-name">${e.author}</h3>
        </div>
    </li>`,_e=async()=>{const e=await Ee();if(!e.length){E.innerHTML="<p>Not found</p>",a.error({message:"Reviews cannot be loaded at this time.",position:"bottomRight"});return}const t=e.map(s=>Te(s)).join("");E.querySelector(".swiper-wrapper").innerHTML=t,i=new $(".swiper",{slidesPerView:1,spaceBetween:10,grabCursor:!0,slideToClickedSlide:!0,speed:800,keyboard:{enabled:!0},mousewheel:{enabled:!0},navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},breakpoints:{768:{slidesPerView:1,spaceBetween:12},1280:{slidesPerView:2,spaceBetween:32}},autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!0},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},on:{slideChange:()=>{T()}}}),T()};function T(){if(!i)return;const e=document.querySelector(".reviews-btn-right"),t=document.querySelector(".reviews-btn-left");e.disabled=i.isEnd,t.disabled=i.isBeginning;const s=document.querySelector(".js-btn-left"),n=document.querySelector(".js-btn-right");s.style.transition="none",n.style.transition="none",i.isEnd&&(n.style.stroke="#e4e5e6",s.style.stroke="#292929"),i.isBeginning&&(s.style.stroke="#e4e5e6",n.style.stroke="#292929"),!i.isEnd&&!i.isBeginning&&(s.style.stroke="#292929",n.style.stroke="#292929"),e.classList.toggle("disabled",i.isEnd),t.classList.toggle("disabled",i.isBeginning)}_e();const m=document.querySelector("#work-together-form"),qe=document.querySelector("#work-together-modal-window");m.elements;m.addEventListener("submit",$e);function Ce(e){const{email:t,message:s}=e.elements;return!!(t.value.trim()&&s.value.trim())}function Oe(e){document.body.classList.add("modal-open"),qe.classList.remove("visually-hidden")}async function Pe(e){const{email:t,message:s}=e.elements,n={email:t.value.trim(),comment:s.value.trim()};return await z.post("https://portfolio-js.b.goit.study/api/requests",n).then(c=>c.data).then(c=>Oe()).catch(c=>{c.response.data?a.error(c.response.data):a.error(c)})}async function Ie(e){e.elements,await Pe(e).then(t=>{})}function $e(e){e.preventDefault(),Ce(m)?Ie(m):a.warning({message:"Error"})}let _=!1,d=!1,b;const B=document.createElement("div");B.id="map";function q(){const e=window.innerWidth>=1280,t=document.getElementById(e?"map-desktop":"map-mobile");let s=t.querySelector(".map-wrapper");return s||(s=document.createElement("div"),s.className="map-wrapper",t.appendChild(s)),s.contains(B)||(s.innerHTML="",s.appendChild(B)),s}async function C(e){return await(await fetch(`styles/map-${e}.json`)).json()}window.initMap=async function(){const t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",s=await C(t);b=new google.maps.Map(document.getElementById("map"),{center:{lat:40.61589475533107,lng:-74.0637538196986},zoom:12,styles:s}),new google.maps.Marker({position:{lat:40.61589475533107,lng:-74.0637538196986},map:b,title:"I am here!"}),_=!0};document.getElementById("show-map-btn").addEventListener("click",function(e){e.preventDefault();const t=q();if(d)t.classList.remove("active"),d=!1;else if(t.classList.add("active"),d=!0,_)window.initMap();else{const s=document.createElement("script");s.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCb8Bd-wNJ4DBDnQ5x1K5J8QeJZBgudncA&callback=initMap",s.async=!0,s.defer=!0,document.head.appendChild(s)}});window.addEventListener("resize",()=>{d&&q().classList.add("active")});window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",async e=>{const t=e.matches?"dark":"light",s=await C(t);b.setOptions({styles:s})});const ze=document.querySelector("#close-modal-button"),g=document.querySelector("#work-together-modal-window"),Ae=document.querySelector("#work-together-form");function f(e){e.preventDefault(),g.classList.add("visually-hidden"),document.body.classList.remove("modal-open"),Ae.reset()}ze.addEventListener("click",f);g.addEventListener("click",function(e){e.target===g&&f(e)});document.addEventListener("keydown",function(e){g.classList.contains("visually-hidden")||(e.key==="Escape"||e.key==="Enter")&&f(e)});
//# sourceMappingURL=index.js.map
