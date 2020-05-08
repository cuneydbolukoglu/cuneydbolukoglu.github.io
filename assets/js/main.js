// Cüneyd BÖLÜKOĞLU 
// Front-End Developer

$(document).ready(function () {

    new fullpage('.fullpage', {
        anchors: ['home-section', 'about'],

        //options here
        autoScrolling: true,
        scrollHorizontally: true
    });

    var image = $(".img-animate")

    image.hover(function(){
        image.fadeOut().fadeIn();
    });
    
});