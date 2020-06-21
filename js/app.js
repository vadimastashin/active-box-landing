$(function() {
    
    
    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load resize", function() {
       let introH = intro.innerHeight();
       scrollPos = $(this).scrollTop();
        
        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
          
            header.removeClass("fixed"); 
            
        }
        
        
    });
    
    
   /* Smooth Scroll */
    
    
   $("[data-scroll]").on("click", function(event) {
       event.preventDefault();
       
       let elementID = $(this).data('scroll');
       let elementOffset = $(elementID).offset()
.top;
       
       nav.removeClass("show");
       
       $("html, body").animate({
           scrollTop: elementOffset - 70
       }, 700);
       
   }); 
    
    
    
    /* Nav Toggle */
    
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    navToggle.on("click", function(event) {
       event.preventDefault();
        
        nav.toggleClass("show");
        
    });
    
    
    
    /* Reviews  https://kenwheeler.github.io/slick/ */
    
    let slider = $("#reviewsSlider");
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
     });
    
});