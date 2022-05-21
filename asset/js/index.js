$(document).ready(function(){
    $("#hamburger1").click(function(){
        $(this).find("#hamburger2").toggleClass("hide");
        $("#close").toggleClass("show");
    }
    )

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        dots:false,
        autoHeight: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    })
