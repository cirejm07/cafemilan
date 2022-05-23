$(document).ready(function(){
    $("#hamburger1").click(function(){
        $(this).find("#hamburger2").toggleClass("hide");
        $("#close").toggleClass("show");
    }
    )

})