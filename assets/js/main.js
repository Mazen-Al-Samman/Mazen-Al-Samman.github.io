$(document).ready(function(){
    if ($(window).width() > 975) {
        $('.collapse').addClass('show');
    } else {
        $('.collapse').removeClass('show');
    }
});

$(window).resize(function() {
    if ($(window).width() > 975) {
        $('.collapse').addClass('show');
    } else {
        $('.collapse').removeClass('show');
    }
});

$('[data-bs-target="#navbarNav"]').on("click", function(){
    let expand = $(this).attr("aria-expanded")
    if (expand == "true") {
        $("#main-content").addClass("mt-200");
    } else {
        $("#main-content").removeClass("mt-200");
    }
});