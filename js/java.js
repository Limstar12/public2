window.onload=function(){
    AOS.init();

    var swiper = new Swiper("#mySwiper.swiper", {
        //centeredSlides: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 65,
        loop : true,        
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 65,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 65,
          },
        },
      });
}