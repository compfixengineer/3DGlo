(()=>{"use strict";(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let o=setInterval((()=>{(()=>{let c=(()=>{let e=(new Date("25 november 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();c.timeRemaining>0?(e.textContent=c.hours<10?"0"+c.hours:c.hours,t.textContent=c.minutes<10?"0"+c.minutes:c.minutes,n.textContent=c.seconds<10?"0"+c.seconds:c.seconds):c.timeRemaining<=0&&(e.textContent="00",t.textContent="00",n.textContent="00",clearInterval(o))})()}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a");function c(){t.classList.toggle("active-menu")}e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-close");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})),t.addEventListener("click",(()=>{e.style.display="none"}))})()})();