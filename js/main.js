(()=>{var e={449:()=>{"use strict";const e=document.querySelector(".burger"),t=document.querySelector(".nav"),o=document.querySelector(".header");e.addEventListener("click",(function(){t.classList.toggle("active"),e.classList.toggle("open")})),document.querySelectorAll(".nav__link").forEach((function(o){o.addEventListener("click",(function(){t.classList.remove("active"),e.classList.remove("open")}))})),document.addEventListener("click",(function(o){t.contains(o.target)||e.contains(o.target)||(t.classList.remove("active"),e.classList.remove("open"))})),document.addEventListener("DOMContentLoaded",(function(){const e=window.location.pathname.split("/").pop();document.querySelectorAll(".nav__link").forEach((t=>{t.getAttribute("href")===e&&t.classList.add("link_active")}))})),window.addEventListener("scroll",(()=>{window.scrollY>300?(o.classList.add("fixed"),document.body.style.paddingTop=`${o.offsetHeight}px`):(o.classList.remove("fixed"),document.body.style.paddingTop="0")}))},957:()=>{console.log("components")}},t={};function o(n){var c=t[n];if(void 0!==c)return c.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}(()=>{"use strict";window,document,document.documentElement,document.body,(0,o(449).burger)(),o(957)})()})();