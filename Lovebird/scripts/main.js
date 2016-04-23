"use strict";

function setBannerHeight() {
    var e = $(window).height(),
        n = $(".banner__img, .banner__gradient");
    $("#topnav").height();
    n.css("height", e)
}

function isMobile() {
    Modernizr.mq("only screen and (max-width: 767px)") ? $("#topnav").addClass("is_mobile") : ($("#topnav").removeClass("is_mobile"), $("#topnav ul").show())
}

function blurred() {
    var e = $("#topnav").height(),
        n = $(".is_stuck .blurred"),
        o = $(window).height(),
        i = $(window).scrollTop(),
        t = 0;
    t = o > i ? "0px" : -i + o + e + "px", n.css({
        height: $(window).outerHeight(),
        "-webkit-transform": "translate3d(0px," + t + ",0px)",
        "-moz-transform": "translate3d(0px," + t + ",0px)",
        "-ms-transform": "translate3d(0px," + t + ",0px)",
        "-o-transform": "translate3d(0px," + t + ",0px)",
        transform: "translate3d(0px," + t + ", 0px)"
    })
}

function clone() {
    Modernizr.mq("only screen and (min-width: 768px)") && $("#content > *").clone().appendTo(".blurred__wrap").attr("id", "").children("#content")
}
$(window).load(function() {
    $(".loader").fadeOut(), $("body").removeClass("loading"), $(".accommodations__tab").pwstabs()
}), $(window).resize(function() {
    setBannerHeight(), isMobile(), blurred()
}), $(document).ready(function() {
    setBannerHeight(), isMobile(), blurred(), clone(), $("#topnav").onePageNav({
        filter: ":not(.external)",
        changeHash: !0,
        easing: "easeInQuint",
        scrollSpeed: 1e3
    }), $(".mobile-nav").click(function() {
        var e = $("#topnav.is_mobile ul");
        e.slideToggle()
    });
    var e = 0;
    $(window).scroll(function(n) {
        var o = $(this).scrollTop(),
            i = $("#topnav.is_mobile ul");
        o > e ? ($("#topnav.is_mobile").hasClass("is_stuck") && $(".mobile-nav").addClass("small"), i.slideUp()) : ($(".mobile-nav").removeClass("small"), i.slideUp()), e = o, blurred()
    }), $("#topnav").stick_in_parent(), $("#proposal .carousel").slick({
        centerMode: !0,
        centerPadding: "100px",
        slidesToShow: 3,
        focusOnSelect: !0,
        slidesToScroll: 1,
        adaptiveHeight: !0,
        asNavFor: "#topnav .carousel",
        responsive: [{
            breakpoint: 767,
            settings: {
                centerMode: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !1,
                adaptiveHeight: !0
            }
        }, {
            breakpoint: 1023,
            settings: {
                centerMode: !1,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: !1,
                adaptiveHeight: !0
            }
        }]
    }), $("#topnav .carousel").slick({
        centerMode: !0,
        centerPadding: "100px",
        slidesToShow: 3,
        focusOnSelect: !0,
        slidesToScroll: 1,
        adaptiveHeight: !0,
        asNavFor: "#proposal .carousel",
        responsive: [{
            breakpoint: 767,
            settings: {
                centerMode: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !1,
                adaptiveHeight: !0
            }
        }, {
            breakpoint: 1023,
            settings: {
                centerMode: !1,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: !1,
                adaptiveHeight: !0
            }
        }]
    }), $(".gift__carousel").slick({
        slidesToScroll: 3,
        infinite: !1,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 767,
            settings: {
                centerMode: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !1,
                adaptiveHeight: !0
            }
        }, {
            breakpoint: 1023,
            settings: {
                centerMode: !1,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: !1,
                adaptiveHeight: !0
            }
        }]
    }), $(".open-inline-popup").magnificPopup({
        type: "inline",
        closeBtnInside: !1,
        mainClass: "mfp-moment mfp-velocity",
        gallery: {
            enabled: !0
        },
        removalDelay: 500,
        callbacks: {
            open: function() {
                var e = "transition.expandIn";
                this.content.velocity(e)
            },
            change: function() {
                this.isOpen && this.wrap.addClass("mfp-open"), $.magnificPopup.instance.next = function() {
                    this.wrap.addClass("mfp-open-next"), this.wrap.removeClass("mfp-open-prev"), this.wrap.removeClass("mfp-open"), $.magnificPopup.proto.next.call(self)
                }, $.magnificPopup.instance.prev = function() {
                    this.wrap.addClass("mfp-open-prev"), this.wrap.removeClass("mfp-open-next"), this.wrap.removeClass("mfp-open"), $.magnificPopup.proto.prev.call(self)
                }
            },
            beforeClose: function() {
                var e = "transition.expandIn",
                    n = e.replace("In", "Out");
                this.content.velocity(n, {
                    duration: 500
                })
            }
        }
    }), $(".image-popup").magnificPopup({
        type: "image",
        mainClass: "mfp-velocity",
        closeBtnInside: !1,
        gallery: {
            enabled: !0
        },
        removalDelay: 500,
        callbacks: {
            open: function() {
                var e = "transition.expandIn";
                this.content.velocity(e), $("body").swipe({
                    swipeLeft: function() {
                        $.magnificPopup.proto.prev.call(self), console.log("swipeleft")
                    },
                    swipeRight: function() {
                        $.magnificPopup.proto.next.call(self), console.log("swiperight")
                    },
                    threshold: 50
                })
            },
            change: function() {
                this.isOpen && this.wrap.addClass("mfp-open"), $.magnificPopup.instance.next = function() {
                    this.wrap.addClass("mfp-open-next"), this.wrap.removeClass("mfp-open-prev"), this.wrap.removeClass("mfp-open"), $.magnificPopup.proto.next.call(self)
                }, $.magnificPopup.instance.prev = function() {
                    this.wrap.addClass("mfp-open-prev"), this.wrap.removeClass("mfp-open-next"), this.wrap.removeClass("mfp-open"), $.magnificPopup.proto.prev.call(self)
                }
            },
            beforeClose: function() {
                var e = "transition.expandIn",
                    n = e.replace("In", "Out");
                this.content.velocity(n, {
                    duration: 500
                })
            },
            closeOnContentClick: !0,
            midClick: !0
        }
    }), $(".image-popup.no-gallery").magnificPopup({
        type: "image",
        mainClass: "mfp-velocity no-gallery",
        closeBtnInside: !1,
        gallery: {
            enabled: !1
        },
        removalDelay: 500,
        callbacks: {
            open: function() {
                var e = "transition.expandIn";
                this.content.velocity(e), $("body").swipe({
                    swipeLeft: function() {
                        $.magnificPopup.proto.prev.call(self), console.log("swipeleft")
                    },
                    swipeRight: function() {
                        $.magnificPopup.proto.next.call(self), console.log("swiperight")
                    },
                    threshold: 50
                })
            },
            change: function() {
                this.isOpen && this.wrap.addClass("mfp-open"), $.magnificPopup.instance.next = function() {
                    this.wrap.addClass("mfp-open-next"), this.wrap.removeClass("mfp-open-prev"), this.wrap.removeClass("mfp-open"), $.magnificPopup.proto.next.call(self)
                }, $.magnificPopup.instance.prev = function() {
                    this.wrap.addClass("mfp-open-prev"), this.wrap.removeClass("mfp-open-next"), this.wrap.removeClass("mfp-open"), $.magnificPopup.proto.prev.call(self)
                }
            },
            beforeClose: function() {
                var e = "transition.expandIn",
                    n = e.replace("In", "Out");
                this.content.velocity(n, {
                    duration: 500
                })
            },
            closeOnContentClick: !0,
            midClick: !0
        }
    }), $("#content form").parsley().on("form:submit", function() {
        var e = 0 === $(".parsley-error").length;
        $(".thankyou").toggleClass("hidden", !e)
    })
});