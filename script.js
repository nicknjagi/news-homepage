const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const body = document.querySelector('body')
const nav = document.querySelector('nav')


menuBtn.addEventListener('click',()=> {
  menuBtn.classList.add('hidden')
  body.classList.toggle('blur')
  nav.classList.toggle('show')
})

closeBtn.addEventListener('click',()=> {
  menuBtn.classList.remove('hidden')
  body.classList.toggle('blur')
  nav.classList.toggle('show')
})