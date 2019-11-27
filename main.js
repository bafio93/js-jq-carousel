$(document).ready(function(){
    $(".header-item > i").click(function(){
        if ($(this).siblings(".submenu").hasClass("display-none")) {
            $(".submenu").addClass("display-none");
            $(this).siblings(".submenu").removeClass("display-none");
        } else {
            $(".submenu").addClass("display-none");
        }
        // Very wacky solution indeed!! XD
    });
});
