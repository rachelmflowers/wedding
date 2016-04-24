$(window).load(function(){
    $('.loader').fadeOut();
});

$(document).ready(function() {
    $('#content > *').clone()
        .appendTo('#clonedyo');

    $('#content .carousel').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        focusOnSelect: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        asNavFor: '#clonedyo .carousel',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    //centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('#clonedyo .carousel').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        focusOnSelect: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        asNavFor: '#content .carousel',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    adaptiveHeight: true
                }
            }
        ]
    });
});
