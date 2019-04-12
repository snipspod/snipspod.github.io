$('.nav-link').on('click', function() {
   $('.navbar-collapse').collapse('hide');
});

$('body').scrollspy({
   target: '.navbar'
});

$('.nav-link').on('click', function(e) {
   //check for a hash value

   if (this.hash !== '') {
      //prevent default behavior
      e.preventDefault();

      // store hash

      const hash = this.hash;

      // animate smooth scroll

      $('html, body').animate(
         {
            scrollTop: $(hash).offset().top
         },
         900,
         function() {
            //add hash to url
            window.location.hash = hash;
         }
      );
   }
});

$('#toggle-button').click(function() {
   if (!$('#navbarCollapse').hasClass('show')) {
      $('#showcase').addClass('blur');
      $('#newsletter').addClass('blur');
      $('#boxes').addClass('blur');
      $('#about').addClass('blur');
      $('#authors').addClass('blur');
      $('#contact').addClass('blur');
      $('#main-footer').addClass('blur');
   } else {
      $('#showcase').removeClass('blur');
      $('#newsletter').removeClass('blur');
      $('#boxes').removeClass('blur');
      $('#about').removeClass('blur');
      $('#authors').removeClass('blur');
      $('#contact').removeClass('blur');
      $('#main-footer').removeClass('blur');
   }
});

let links = $('.nav-link');

links.click(function() {
   $('#showcase').removeClass('blur');
   $('#newsletter').removeClass('blur');
   $('#boxes').removeClass('blur');
   $('#about').removeClass('blur');
   $('#authors').removeClass('blur');
   $('#contact').removeClass('blur');
   $('#main-footer').removeClass('blur');
});
