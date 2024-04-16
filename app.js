window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
  
    // navbar.classList.add(".black")


    if (window.scrollY > 320 && window.scrollY < 600) {
      navbar.style.display = "none";
    }
    else if(window.scrollY < 180 ){
        
        navbar.classList.remove("black");
      }
     else {
      navbar.classList.add("black");
      navbar.style.display = "block";
    }
});


window.addEventListener("DOMContentLoaded",function(){
    var bod=document.getElementById("body");
   var loa=document.getElementById("loader")
    bod.style.display="none";
    loa.style.display="block";

this.setInterval(function(){
    bod.style.display="block";
    loa.style.display="none";
}
,4000

)
})
  const swiper = new Swiper(".swiper", {
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // Default parameters
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },

          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
       
          640: {
            slidesPerView: 3,
            spaceBetween: 40
          },
       
        }
      });









      

      const str = "Welcometourwebsitefollow our fb page";
      const text = document.getElementById("text");
      window.onload = function(){
          for (let i = 0; i < str.length; i++) {
              let span = document.createElement('span1');
              span.innerHTML = str[i] 
              text.appendChild(span);
              console.log(str[i])
              span.style.transform = `rotate(${11*i}deg)`;
          }
        }
        var a=0;
function fn(){
    document.getElementById("sat").innerHTML=a++;
    if(a > 2000)
    clearInterval(stop)
}
var stop=setInterval(fn,0.0002)
// 
var b=0;
function fn1(){
    document.getElementById("s2").innerHTML= b++ + "%";
    if(b > 95)
    clearInterval(stop1)
}
var stop1=setInterval(fn1,130)

var c=0;
function fn2(){
    document.getElementById("s3").innerHTML= c++ ;
    if(c > 1200)
    clearInterval(stop2)
}
var stop2=setInterval(fn2,0.13)
// 
var d=0;
function fn3(){
    document.getElementById("s4").innerHTML= d++ ;
    if(d > 96)
    clearInterval(stop3)
}
var stop3=setInterval(fn3,30)
// 

