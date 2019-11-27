$(document).ready(function(){
    // Left section:
    $("i.fa-arrow-circle-left").click(function(){
        // alert("Tutto ok left");
        var current_img = $("img.active");
        var prev_img = $("img.active").prev("img");
        current_img.removeClass("active");
        prev_img.addClass("active");
    })
    // Right section:
    $("i.fa-arrow-circle-right").click(function(){
        // alert("Tutto ok right");
        var current_img = $("img.active");
        var next_img = $("img.active").next("img");
        current_img.removeClass("active");
        next_img.addClass("active");
    })
});
