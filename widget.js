document.addEventListener( 'DOMContentLoaded', function () {
    var splide = new Splide( '.splide', {
        type: 'loop',
        perPage: 2,
        gap: "1.5em",
        height: "140px",
        breakpoints: {
            1024: {
                perPage:1,
            },
            640: {
              perPage: 1,
              width:"75%",
            }
          }
      } );
      
      splide.mount();
  });