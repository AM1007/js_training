(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const p=[{id:1,img:"https://static.dnipro-m.ua/cache/products/5009/catalog_origin_182887.jpg",name:"Шуруповерт",price:150,description:"Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."},{id:3,img:"https://static.dnipro-m.ua/cache/products/1248/catalog_origin_257336.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."},{id:4,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{id:5,img:"https://static.dnipro-m.ua/cache/products/2300/catalog_origin_261037.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."},{id:6,img:"https://static.dnipro-m.ua/cache/products/6566/catalog_origin_287856.jpg",name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."},{id:7,img:"https://static.dnipro-m.ua/cache/products/6530/catalog_origin_287574.jpg",name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."},{id:8,img:"https://static.dnipro-m.ua/cache/products/2745/catalog_origin_284077.jpg",name:"Генератор",price:10890,description:"Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."}],m=document.querySelector(".js-list");function g(i){return i.map(({description:c,price:o,name:r,img:t,id:e})=>`
  <li class="product-card js-product" data-product-id="${e}">
    <img src="${t}" alt="${r}" class="product-img" />
    <h2 class="product-title">${r}</h2>
    <p class="product-description">${c}</p>
    <p class="product-price">${o}</p>
    <button class="product-add-btn js-add" type="button">Add to basket</button>
  </li>
  `).join("")}g(p);m.insertAdjacentHTML("afterbegin",g(p));m.addEventListener("click",j);const u="checkout";function j(i){const{target:c}=i;if(!c.classList.contains("js-add"))return;const o=c.closest(".js-product"),r=Number(o.dataset.productId),t=p.find(({id:d})=>d===r),e=JSON.parse(localStorage.getItem(u))??[],s=e.findIndex(({id:d})=>d===r);s!==-1?e[s].qty+=1:(t.qty=1,e.push(t)),localStorage.setItem(u,JSON.stringify(e))}const a={list:document.querySelector(".js-list"),cost:document.querySelector(".js-cost"),clearBtn:document.querySelector(".js-clear")},f="checkout",n=JSON.parse(localStorage.getItem(f))??[];function h(i){return i.map(({img:c,name:o,qty:r,price:t})=>`
  <li class="card-item">
    <img src="${c}" alt="${o}" class="product-img"/>
    <h2 >${o}</h2>
    <p >${r}</p>
    <p >Total price: ${r*t}</p>
  </li>
  `).join("")}h(n);a.list.insertAdjacentHTML("afterbegin",h(n));let l;n.length&&(a.clearBtn.hidden=!1,l=n.reduce((i,{qty:c,price:o})=>i+c*o,0));a.cost.textContent=l?`Total cost: ${l}`:"Your basket is empty";a.clearBtn.addEventListener("click",y);function y(){localStorage.removeItem(f),location.href="../../partials/lecture01/lecture1.html"}
