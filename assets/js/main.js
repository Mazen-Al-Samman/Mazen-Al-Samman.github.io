$(document).ready(function(){
    var numberOfDivs = 3;
    if ($(window).width() > 975) {
        $('.collapse').addClass('show');
    } else {
        numberOfDivs = 1;
        $('.collapse').removeClass('show');
    }
    $('.testimonial_wrapper').slick({
        infinite: true,
        slidesToShow: numberOfDivs,
        centerMode: true,
        slidesToScroll: 1,
        dots: true,
        lazyLoad: 'ondemand',
      });
});

$(window).resize(function() {
    if ($(window).width() > 975) {
        numberOfDivs = 3;
        $('.collapse').addClass('show');
    } else {
        numberOfDivs = 1;
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

let items = document.querySelectorAll('.carousel .carousel-item')
items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
