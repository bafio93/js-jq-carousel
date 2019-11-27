$(document).ready(function(){
    // Left section:
    $("i.fa-arrow-circle-left").click(function(){
        var current_img = $("img.active");
        var prev_img = current_img.prev("img");
        if (prev_img.length==0) {
            prev_img = $("img:last-child");
        }
        current_img.removeClass("active");
        prev_img.addClass("active");
    })
    // Right section:
    $("i.fa-arrow-circle-right").click(function(){
        var current_img = $("img.active");
        var next_img = current_img.next("img");
        if (next_img.length==0) {
            next_img = $("img:first-child");
        }
        current_img.removeClass("active");
        next_img.addClass("active");
    })
});
