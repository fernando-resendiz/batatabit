const coins = document.getElementById('coins')
const comissions = document.getElementById('comissions')
const left = document.getElementById('nav-left')
const right = document.getElementById('nav-right')

right.addEventListener('click', ()=>{
    coins.classList.add('show-comissions')
    comissions.classList.add('show-comissions')
    right.style.display = "none"
    setTimeout(()=> left.style.display = "block",400) 
})
left.addEventListener('click', ()=>{
    coins.classList.remove('show-comissions')
    comissions.classList.remove('show-comissions')
    left.style.display = "none"
    setTimeout(()=> right.style.display = "block",400) 
})
