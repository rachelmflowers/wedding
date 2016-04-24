'use strict';

function setBannerHeight(){
    var windowHeight = $(window).height(),
        bannerImgGrad = $('.banner__img, .banner__gradient'),
        navHeight = $('#topnav').height(),
        bannerHeight = windowHeight - navHeight;

    bannerImgGrad.css('height', windowHeight);
}

function isMobile(){
    if (Modernizr.mq('only screen and (max-width: 767px)')) {
        $('#topnav').addClass('is_mobile');
    } else {
        $('#topnav').removeClass('is_mobile');
        $('#topnav ul').show();
    }
}

function blurred(){
    var navHeight = $('#topnav').height(),
        blurred = $('.is_stuck .blurred'),
        wHeight = $(window).height(),
        st = $(window).scrollTop(),
        stFix = 0;


    if (st < wHeight){
        stFix = '0px';
    } else {
        stFix = -st + wHeight + navHeight + 'px';
    }

    blurred.css({
        'height'            : $(window).outerHeight(),
        '-webkit-transform' : 'translate3d(0px,' + stFix + ',0px)',
        '-moz-transform'    : 'translate3d(0px,' + stFix + ',0px)',
        '-ms-transform'     : 'translate3d(0px,' + stFix + ',0px)',
        '-o-transform'      : 'translate3d(0px,' + stFix + ',0px)',
        'transform'         : 'translate3d(0px,' + stFix + ', 0px)'
    });
}

function clone(){
    if (Modernizr.mq('only screen and (min-width: 768px)')) {
        $('#content > *').clone()
            .appendTo('.blurred__wrap')
            .attr('id', '')
            .children('#content');
    }
}

$(window).load(function(){
    $('.loader').fadeOut();
    $('body').removeClass('loading');
    $('.accommodations__tab').pwstabs();
});

$(window).resize(function(){
    setBannerHeight();
    isMobile();
    blurred();
});

$(document).ready(function() {
    setBannerHeight();
    isMobile();
    blurred();
    clone();

    $('#topnav').onePageNav({
        filter: ':not(.external)',
        changeHash: true,
        easing: 'easeInQuint',
        scrollSpeed: 1000
    });

    $('.mobile-nav').click(function(){
        var $animated = $('#topnav.is_mobile ul');
        $animated.slideToggle();
    });

    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        var $animated = $('#topnav.is_mobile ul');
        if (st > lastScrollTop){
            // downscroll code
            if($('#topnav.is_mobile').hasClass('is_stuck')){
                $('.mobile-nav').addClass('small');
            }
            $animated.slideUp();
        } else {
            $('.mobile-nav').removeClass('small');
            $animated.slideUp();
        }
        lastScrollTop = st;

        blurred();
    });

    $('#topnav').stick_in_parent();

    $('#proposal .carousel').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        focusOnSelect: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        asNavFor: '#topnav .carousel',
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

    $('#topnav .carousel').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        focusOnSelect: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        asNavFor: '#proposal .carousel',
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

    $('.gift__carousel').slick({
        slidesToScroll: 3,
        infinite: false,
        slidesToShow: 3,
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

    $('.open-inline-popup').magnificPopup({
        type: 'inline',
        closeBtnInside: false,
        mainClass: 'mfp-moment mfp-velocity', // this class is for CSS animation below
        gallery: {
            enabled: true
        },

        removalDelay: 500,

        callbacks: {
            open: function () {
                var open = 'transition.expandIn';
                this.content.velocity(open);
            },
            change: function() {
                if (this.isOpen) {
                    this.wrap.addClass('mfp-open');
                }

                $.magnificPopup.instance.next = function () {
                    this.wrap.addClass('mfp-open-next');
                    this.wrap.removeClass('mfp-open-prev');
                    this.wrap.removeClass('mfp-open');
                    $.magnificPopup.proto.next.call(self);
                };
                $.magnificPopup.instance.prev = function () {
                    this.wrap.addClass('mfp-open-prev');
                    this.wrap.removeClass('mfp-open-next');
                    this.wrap.removeClass('mfp-open');
                    $.magnificPopup.proto.prev.call(self);
                };
            },
            beforeClose: function () {
                var open = 'transition.expandIn';
                var close = open.replace('In', 'Out');
                this.content.velocity(close, {
                    duration: 500
                });
            }
        }
    });

    $('.image-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-velocity', // this class is for CSS animation below
        closeBtnInside: false,
        gallery: {
            enabled: true
        },

        removalDelay: 500, //delay removal by X to allow out-animation

        callbacks: {
            open: function () {
                var open = 'transition.expandIn';
                this.content.velocity(open);

                // SWIPE CONTROL
                $('body').swipe({
                    swipeLeft: function() {
                        $.magnificPopup.proto.prev.call(self);
                        console.log('swipeleft');
                    },
                    swipeRight: function() {
                        $.magnificPopup.proto.next.call(self);
                        console.log('swiperight');
                    },
                    threshold: 50
                });
            },
            change: function() {
                if (this.isOpen) {
                    this.wrap.addClass('mfp-open');
                }

                $.magnificPopup.instance.next = function () {
                    this.wrap.addClass('mfp-open-next');
                    this.wrap.removeClass('mfp-open-prev');
                    this.wrap.removeClass('mfp-open');
                    $.magnificPopup.proto.next.call(self);
                };
                $.magnificPopup.instance.prev = function () {
                    this.wrap.addClass('mfp-open-prev');
                    this.wrap.removeClass('mfp-open-next');
                    this.wrap.removeClass('mfp-open');
                    $.magnificPopup.proto.prev.call(self);
                };
            },
            beforeClose: function () {
                var open = 'transition.expandIn';
                var close = open.replace('In', 'Out');
                this.content.velocity(close, {
                    duration: 500
                });
            },
            closeOnContentClick: true,
            midClick: true
        }
    });

    $('.image-popup.no-gallery').magnificPopup({
        type: 'image',
        mainClass: 'mfp-velocity no-gallery', // this class is for CSS animation below
        closeBtnInside: false,
        gallery: {
            enabled: false
        },

        removalDelay: 500, //delay removal by X to allow out-animation

        callbacks: {
            open: function () {
                var open = 'transition.expandIn';
                this.content.velocity(open);

                // SWIPE CONTROL
                $('body').swipe({
                    swipeLeft: function() {
                        $.magnificPopup.proto.prev.call(self);
                        console.log('swipeleft');
                    },
                    swipeRight: function() {
                        $.magnificPopup.proto.next.call(self);
                        console.log('swiperight');
                    },
                    threshold: 50
                });
            },
            change: function() {
                if (this.isOpen) {
                    this.wrap.addClass('mfp-open');
                }

                $.magnificPopup.instance.next = function () {
                    this.wrap.addClass('mfp-open-next');
                    this.wrap.removeClass('mfp-open-prev');
                    this.wrap.removeClass('mfp-open');
                    $.magnificPopup.proto.next.call(self);
                };
                $.magnificPopup.instance.prev = function () {
                    this.wrap.addClass('mfp-open-prev');
                    this.wrap.removeClass('mfp-open-next');
                    this.wrap.removeClass('mfp-open');
                    $.magnificPopup.proto.prev.call(self);
                };
            },
            beforeClose: function () {
                var open = 'transition.expandIn';
                var close = open.replace('In', 'Out');
                this.content.velocity(close, {
                    duration: 500
                });
            },
            closeOnContentClick: true,
            midClick: true
        }
    });

    $('#content form').parsley().on('form:submit', function() {
        var ok = $('.parsley-error').length === 0;
        $('.thankyou').toggleClass('hidden', !ok);
    });
});
