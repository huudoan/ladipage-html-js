const expiresCookie = 30;
(function ($) {
    $(document).ready(function () {
        setCookieUtm();
        (function () {
            var abc = $('.vertical-tab  .nav-tabs').width();
            $('.vertical-tab  .tab-content').css("margin-left", abc - 1);
        })();

        /*----------------------------------------------------*/
        /*	Same Height Div's
         /*----------------------------------------------------*/
        if (jQuery.isFunction(jQuery.fn.matchHeight)) {
            $('.same-height').matchHeight();
        }

        /*----------------------------------------------------*/
        /*	Fraction Slider
        /*----------------------------------------------------*/
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

        //  ============================
        //  = Scroll event function =
        //  ===========================
        var goScrolling = function (elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = elem.offset().top;
            var elemBottom = elemTop + elem.height();
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        };


        //  =======================
        //  = Progress bars =
        //  =======================
        $('.progress_skill .bar').data('width', $(this).width()).css({
            width: 0,
            height: 0
        });
        $(window).scroll(function () {
            $('.progress_skill .bar').each(function () {
                if (goScrolling($(this))) {
                    $(this).css({
                        width: $(this).attr('data-value') + '%',
                        height: $(this).attr('data-height') + '%'
                    });
                }
            });
        });

        /*----------------------------------------------------*/
        /*	SwipeMin Slider
         /*----------------------------------------------------*/
        window.mySwipe = new SwipeMin(document.getElementById('slider'), {
            startSlide: 2,
            speed: 400,
            auto: 3000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback: function (index, elem) {
            },
            transitionEnd: function (index, elem) {
            }
        });

        /*----------------------------------------------------*/
        /*	Accordians
         /*----------------------------------------------------*/

        $('.accordion').on('shown.bs.collapse', function (e) {
            $(e.target).parent().addClass('active_acc');
            $(e.target).prev().find('.switch').removeClass('fa-plus-circle');
            $(e.target).prev().find('.switch').addClass('fa-minus-circle');
        });
        $('.accordion').on('hidden.bs.collapse', function (e) {
            $(e.target).parent().removeClass('active_acc');
            $(e.target).prev().find('.switch').addClass('fa-plus-circle');
            $(e.target).prev().find('.switch').removeClass('fa-minus-circle');
        });


        /*----------------------------------------------------*/
        /*	Toggles
         /*----------------------------------------------------*/
        $('.toggle').on('shown.bs.collapse', function (e) {
            $(e.target).parent().addClass('active_acc');
            $(e.target).prev().find('.switch').removeClass('fa-plus-circle');
            $(e.target).prev().find('.switch').addClass('fa-minus-circle');
        });
        $('.toggle').on('hidden.bs.collapse', function (e) {
            $(e.target).parent().removeClass('active_acc');
            $(e.target).prev().find('.switch').addClass('fa-plus-circle');
            $(e.target).prev().find('.switch').removeClass('fa-minus-circle');
        });

        /*============
         BUTTON UP
         * ===========*/
        var btnUp = $('<div/>', {'class': 'btntoTop'});
        btnUp.appendTo('body');
        $(document).on('click', '.btntoTop', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 700);
            });

        $(window).on('scroll', function () {
                if ($(this).scrollTop() > 200)
                    $('.btntoTop').addClass('active');
                else
                    $('.btntoTop').removeClass('active');
            });

        /* ------------------ End Document ------------------ */
    });
})(this.jQuery);

/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch, iPad, and Android mobile phones
 * Common usage: wipe images (left and right to show the previous or next image)
 *
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 */
(function ($) {
    $.fn.touchwipe = function (settings) {
        var config = {
            min_move_x: 20, min_move_y: 20, wipeLeft: function () {
            }, wipeRight: function () {
            }, wipeUp: function () {
            }, wipeDown: function () {
            }, preventDefaultEvents: true
        };
        if (settings) $.extend(config, settings);
        this.each(function () {
            var startX;
            var startY;
            var isMoving = false;

            function cancelTouch() {
                this.removeEventListener('touchmove', onTouchMove);
                startX = null;
                isMoving = false
            }

            function onTouchMove(e) {
                if (config.preventDefaultEvents) {
                    e.preventDefault()
                }
                if (isMoving) {
                    var x = e.touches[0].pageX;
                    var y = e.touches[0].pageY;
                    var dx = startX - x;
                    var dy = startY - y;
                    if (Math.abs(dx) >= config.min_move_x) {
                        cancelTouch();
                        if (dx > 0) {
                            config.wipeLeft()
                        } else {
                            config.wipeRight()
                        }
                    } else if (Math.abs(dy) >= config.min_move_y) {
                        cancelTouch();
                        if (dy > 0) {
                            config.wipeDown()
                        } else {
                            config.wipeUp()
                        }
                    }
                }
            }

            function onTouchStart(e) {
                if (e.touches.length == 1) {
                    startX = e.touches[0].pageX;
                    startY = e.touches[0].pageY;
                    isMoving = true;
                    this.addEventListener('touchmove', onTouchMove, false)
                }
            }

            if ('ontouchstart' in document.documentElement) {
                this.addEventListener('touchstart', onTouchStart, false)
            }
        });
        return this
    }
})(jQuery);

function setCookieUtm() {
    const domain = window.location.hostname;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const utm_source = urlParams.get('utm_source');
    const utm_medium = urlParams.get('utm_medium');
    const utm_campaign = urlParams.get('utm_campaign');
    const utm_adgroup = urlParams.get('utm_adgroup');
    const utm_adset = urlParams.get('utm_adset');
    const utm_code = urlParams.get('utm_code');

    if (utm_source != null && utm_source != '') {
        $.cookie(domain + '-utm_source', utm_source,  { expires: expiresCookie });
    }

    if (utm_medium != null && utm_medium != '') {
        $.cookie(domain + '-utm_medium', utm_medium,  { expires: expiresCookie });
    }

    if (utm_campaign != null && utm_campaign != '') {
        $.cookie(domain + '-utm_campaign', utm_campaign,  { expires: expiresCookie });
    }

    if (utm_adgroup != null && utm_adgroup != '') {
        $.cookie(domain + '-utm_adgroup', utm_adgroup,  { expires: expiresCookie });
    }

    if (utm_source != null && utm_source != '') {
        $.cookie(domain + '_utm_source', utm_source,  { expires: expiresCookie });
    }

    if (utm_adset != null && utm_adset != '') {
        $.cookie(domain + '-utm_adset', utm_adset,  { expires: expiresCookie });
    }

    if (utm_code != null && utm_code != '') {
        $.cookie(domain + '-utm_code', utm_code,  { expires: expiresCookie });
    }
}

function getCookieUtm(key) {
    const domain = window.location.hostname;
    return $.cookie(domain + '-' + key);
}
