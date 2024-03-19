$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

// toggle menu/navbar script
$('.menu-btn').click(function(){
  $('.menu').fadeToggle(0);
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["UI/UX Developer", "Fronted Developer"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });
});


