let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let main = document.querySelector('main')
let header = document.querySelector('header')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let footer = document.querySelector('footer')
let table = document.querySelector('table')
let tabela = document.getElementById('tabela')
let caption = document.querySelector('caption')
let a = document.querySelector('a')





trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    main.classList.toggle('dark')
    header.classList.toggle('dark')
    h1.classList.toggle('dark')
    h2.classList.toggle('dark')
    table.classList.toggle('dark')
    fotter.classList.toggle('dark')
    caption.classList.toggle('dark')
    a.classList.toggle('dark')


})