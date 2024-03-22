  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'), 
        smooth: true });




var elemC = document.querySelector(".elem-container");
var fixed = document.querySelector(".fixed")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var img = e.getAttribute("data-img")
        console.log(img)
        fixed.style.backgroundImage = `url(${uranuscrypto})`
    })
    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
})

var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
 var navimg = document.querySelector("nav img")
menu.addEventListener("click",function(){
  full.style.top = 0
  navimg.style.opacity = 0
})
















