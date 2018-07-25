$(document).ready(function() {

(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();

// Hide the mobile menu unless click on menu icon
$('#nav').hide();

// When you click on mobile menu icon show mobile menu
$('#hamburger-icon').click( function(event){
   event.stopPropagation();
   $('#nav').slideToggle(600);
   $('#hamburger-icon').css('visibility','hidden');
 });
// When you click anywhere in the document close mobile menu if open
$(document).click( function(){
   $('#nav').hide();
   $('#hamburger-icon').css('visibility','visible');
 });

})
