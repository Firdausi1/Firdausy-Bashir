$(document).ready(function() {
    $(".js--location").on("click", function() {
        $("html , body").animate({ scrollTop: $(".js--section-footer").offset().top }, 1000)
    });

    $(".js--menu").on("click", function() {
        $("html , body").animate({ scrollTop: $(".js--images").offset().top }, 1000)
    });

    $(".js--news").on("click", function() {
        $("html , body").animate({ scrollTop: $(".destination").offset().top }, 1000)
    });

    $(".js--reservation").on("click", function() {
        $("html , body").animate({ scrollTop: $(".js--reservation-head").offset().top }, 1000)
    });

    $(".destination").waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '100px'
    });

    $('.nav-icons').on('click', function() {

        var nav = $('.nav-head');
        var icon = $('.nav-icons i')

        nav.slideToggle(200); // .hasclass
        if (icon.hasClass('fa fa-align-justify')) {
            icon.addClass('far fa-window-close');
            icon.removeClass('fa fa-align-justify')
        } else {
            icon.addClass('fa fa-align-justify ');
            icon.removeClass('far fa-window-close')
        }

    })



});