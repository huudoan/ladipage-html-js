define(["jquery", "fractionslider"], function($) {
    $(document).ready(function() {
        (function () {
            var abc = $('.vertical-tab  .nav-tabs').width();
            $('.vertical-tab  .tab-content').css("margin-left", abc - 1);
        })();

        if (jQuery.isFunction(jQuery.fn.matchHeight)) {
            $('.same-height').matchHeight();
        }

        if (jQuery.isFunction(jQuery.fn.fractionSlider)) {
            $(window).load(function () {
                $('.slider').fractionSlider({
                    'fullWidth': true,
                    'controls': true,
                    'responsive': true,
                    'dimensions': "1170,355",
                    'timeout': 5000,
                    'increase': true,
                    'pauseOnHover': true,
                    'slideEndAnimation': false,
                    'autoChange': true
                });
            });
        }
    });
});
