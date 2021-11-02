const togglebtn = document.querySelector('.nav-header')
const closesidebar = document.querySelector('.close-sidebar');
const aside = document.querySelector('.aside');

togglebtn.addEventListener("click", function(){
    aside.classList.toggle('show-aside');
})
closesidebar.addEventListener("click", function(){
    aside.classList.remove('show-aside')
})