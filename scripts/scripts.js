$("#menu__toggle").onclick(function(){
    if($(this).is(":checked")) {
        $('body').addClass("body__fixed");
    } else {
        $(body).removeClass("body__fixed");
    }
});