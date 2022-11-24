document.addEventListener( 'DOMContentLoaded', function () {
    var splide = new Splide( '.splide', {
        height: '150px',
        type   : 'loop',
        drag   : 'free',
        snap   : true,
        perPage: 2,
        breakpoints: {
            640: {
              perPage: 1,
            }
          },
      } );
      
      splide.mount();
  });
  