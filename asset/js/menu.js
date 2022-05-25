$(document).ready(function(){
    $("#hamburger1").click(function(){
        $(this).find("#hamburger2").toggleClass("hide");
        $("#close").toggleClass("show");
    }
    )

    // category search
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'All'){
            $('.itemList').fadeIn(1000);
        }
        else {
            $('.itemList').not('.'+value).fadeOut();
            $('.itemList').filter('.'+value).fadeIn(1500);
        }
    })

    $('.list').click(function(){
        $(this).toggleClass('active').siblings().removeClass('active')
    })

    // search
    $("#searchBar").keyup(function() {
        var value = $(this).val().toLowerCase();
        $(".card").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
})