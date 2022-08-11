$('.Mysection').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }

   },
   {
    breakpoint: 300,
    settings: {
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }

 }]
  });
  const mainMenu = document.querySelector('.mainMenu');
  const closeMenu = document.querySelector('.closeMenu');
  const openMenu = document.querySelector('.openMenu');
  const menu_items = document.querySelectorAll('nav .mainMenu li a');
  
  openMenu.addEventListener('click',show);
  closeMenu.addEventListener('click',close);
  
  // close menu when you click on a menu item 
  menu_items.forEach(item =>{
      item.addEventListener('click',function(){
          close();
      })
  })
  
  function show(){
      mainMenu.style.display = 'flex';
      mainMenu.style.top = '0';
  }
  function close(){
      mainMenu.style.top = '-100%';
  }