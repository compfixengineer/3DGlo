(()=>{"use strict";(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let o=setInterval((()=>{(()=>{let s=(()=>{let e=(new Date("25 november 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();s.timeRemaining>0?(e.textContent=s.hours<10?"0"+s.hours:s.hours,t.textContent=s.minutes<10?"0"+s.minutes:s.minutes,n.textContent=s.seconds<10?"0"+s.seconds:s.seconds):s.timeRemaining<=0&&(e.textContent="00",t.textContent="00",n.textContent="00",clearInterval(o))})()}),1e3)})()})();