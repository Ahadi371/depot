// $(document).ready(function() {
 
//     $("#owl-demo").owlCarousel({
   
//         autoPlay: 3000, //Set AutoPlay to 3 seconds
   
//         items : 4,
//         itemsDesktop : [1199,3],
//         itemsDesktopSmall : [979,3]
   
//     });
   
//   });
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 3, // Number of items to display
      loop: true, // Enable looping
      margin: 10, // Space between items
      autoplay: true, // Enable auto-play
      autoplayTimeout: 5000, // Time in ms
      nav: true, // Show navigation arrows
      dots: true // Show pagination dots
    });

  });
  $(".price").hover(
    function() {
        // On hover, replace text with a button
        $(this).html('<button class="add-to-cart">Add to Cart</button>');
    },
    function() {
        // On hover out, revert to original price
        $(this).html("$120");
    },

    $(".image-container").hover(
      function () {
          // On mouse enter
          $(this).find(".image-front").css({
              opacity: 0,
              transform: "scale(1.0)"
          });
          $(this).find(".image-back").css({
              opacity: 1,
              transform: "scale(1)"
          });
      },
      function () {
          // On mouse leave
          $(this).find(".image-front").css({
              opacity: 1,
              transform: "scale(1)"
          });
          $(this).find(".image-back").css({
              opacity: 0,
              transform: "scale(1.0)"
          });
      }
  )
    

    
);
// script.js


  