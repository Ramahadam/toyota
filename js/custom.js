const humburger = document.querySelector("#mobile-menu");
const menuList  = document.querySelector(".nav-menu");


humburger.addEventListener('click',function(){

  menuList.classList.toggle('active')
  humburger.classList.toggle('open')
});