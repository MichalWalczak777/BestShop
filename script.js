const btn = document.querySelector('.burger');
const nav = document.querySelector('.nav-list');

console.log(btn, nav);

btn.addEventListener("click", function(){
    console.log("kilk");
    nav.classList.toggle("show");
})

