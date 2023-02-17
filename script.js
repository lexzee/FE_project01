const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const test = document.getElementById('test');

btn.addEventListener('click', ()=>{
  btn.classList.toggle('open');
  btn.classList.toggle('bg-icon-close');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

test.innerHTML = ""