
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
// nav
window.addEventListener("resize", function() {
    "use strict"; window.location.reload(); 
  });
 document.addEventListener("DOMContentLoaded", function()
 {
 /////// Prevent closing from click inside dropdown
 document.querySelectorAll('.dropdown-menu').forEach(function(element)
 {
         element.addEventListener('click', function(e)
         {
                 e.stopPropagation();
         });
 })
 // make it as accordion for smaller screens
 if (window.innerWidth < 992)
 {
         // close all inner dropdowns when parent is closed
         document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown)
         {
                 everydropdown.addEventListener('hidden.bs.dropdown', function()
                 {
                         // after dropdown is hidden, then find all submenus
                         this.querySelectorAll('.submenu')
                                 .forEach(function(everysubmenu)
                                 {
                                         // hide every submenu as well
                                         everysubmenu
                                                 .style
                                                 .display =
                                                 'none';
                                 });
                 })
         });
         document.querySelectorAll('.dropdown-menu a').forEach(function(element)
         {
                 element.addEventListener('click', function(e)
                 {
                         let nextEl = this.nextElementSibling;
                         if (nextEl && nextEl.classList
                                 .contains('submenu'))
                         {
                                 // prevent opening link if link needs to open dropdown
                                 e.preventDefault();
                                 console.log(nextEl);
                                 if (nextEl.style.display ==
                                         'block')
                                 {
                                         nextEl.style.display =
                                                 'none';
                                 }
                                 else
                                 {
                                         nextEl.style.display =
                                                 'block';
                                 }
                         }
                 });
         })
 }
 // end if innerWidth
 });
 // DOMContentLoaded  end

  