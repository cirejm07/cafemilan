$(document).ready(function(){
    $("#hamburger1").click(function(){
        $(this).find("#hamburger2").toggleClass("hide");
        $("#close").toggleClass("show");
    }
    )

    
   
  
 

    var developer = $(".developer")
    var sun = $(".sun")
    $(window).scroll(function(){
        var top = $(this).scrollTop()
        setTimeout(function(){
                console.log($(this).scrollTop())
                developer.css("transform","translateY(" + -top + "px)");
                sun.css("transform","rotate(" + top + "deg)")
        }, 100)
        
    })

   
})