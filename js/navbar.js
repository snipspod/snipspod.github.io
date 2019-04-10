$(".nav-link").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

$("body").scrollspy({
  target: ".navbar"
});

$(".nav-link").on("click", function(e) {
  //check for a hash value

  if (this.hash !== "") {
    //prevent default behavior
    e.preventDefault();

    // store hash

    const hash = this.hash;

    // animate smooth scroll

    $("html, body").animate(
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
