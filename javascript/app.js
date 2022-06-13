
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


   const openMenu=document.querySelector('.openMenu')
   const closeMenu=document.querySelector('.closeMenu')
   const navList=document.querySelector('.nav-list')
   

   const changeBar=()=>{
    openMenu.classList.toggle("active")
    closeMenu.classList.toggle("active")
    navList.classList.toggle("active")

     console.log("clicked");
   }