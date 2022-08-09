$('.Mysection').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
   }]
  })