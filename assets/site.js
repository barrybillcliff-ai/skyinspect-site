const menu=document.querySelector('.menu'),nav=document.querySelector('.navlinks');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('details').forEach(x=>{if(x!==d)x.open=false})}));
