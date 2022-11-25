document.addEventListener( 'DOMContentLoaded', function () {
    var splide = new Splide( '.splide', {
        width: "30%",
        height: "130px",
        perPage: 2,
        breakpoints: {
          640: {
            perPage: 1,
            width:"75%",
          }
        }
      } );
      
      splide.mount();
  });
  