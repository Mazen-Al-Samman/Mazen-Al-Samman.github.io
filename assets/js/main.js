const mobileWidth = 975;
$(document).ready(function () {
    var numberOfDivs = 3;
    if ($(window).width() > mobileWidth) {
        $('.collapse').addClass('show');
    } else {
        numberOfDivs = 1;
        $("#middle-text").removeClass("pt-100");
        $('.collapse').removeClass('show');
    }
    $('.testimonial_wrapper').slick({
        infinite: true,
        slidesToShow: numberOfDivs,
        centerMode: true,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

$(window).resize(function () {
    if ($(window).width() > mobileWidth) {
        numberOfDivs = 3;
        $('.collapse').addClass('show');
    } else {
        numberOfDivs = 1;
        $('.collapse').removeClass('show');
    }
});

// Hide navbar when scroll.
$(document).bind("scroll", function () {
    let expand = $('.navbar-toggler').attr("aria-expanded")
    if (expand == "true") {
        $('.collapse').removeClass('show');
    }
});

let items = document.querySelectorAll('.carousel .carousel-item')
items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
