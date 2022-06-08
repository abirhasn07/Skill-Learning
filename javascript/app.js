
   var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
   });


   window.addEventListener("scroll",function(){

    const nav=document.querySelector('nav')
    nav.classList.toggle("active",window.scrollY>0)

   })