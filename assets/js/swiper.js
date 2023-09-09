const swiperSahre = new Swiper(".share-swiper", {
    spaceBetween: 24,
    // 滑鼠中鍵滾輪可滑動
    mousewheel: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true
    },
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

    var swiper = new Swiper(".myswiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });