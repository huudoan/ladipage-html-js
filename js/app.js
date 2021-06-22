const expiresCookie = 30;
const prefixKey = '-511';
define([
        "jquery",
        "fractionslider",
        "scrolltofixed",
        "bootstrap",
        "smartmenus",
        "bssmartmenus",
        "jquery-validate",
        "jquery-cookie"
    ], function($) {
    $(document).ready(function () {
        console.log(getCookieUtm('utm_source'));
        (function () {
            var abc = $('.vertical-tab  .nav-tabs').width();
            $('.vertical-tab  .tab-content').css("margin-left", abc - 1);
        })();

        if (jQuery.isFunction(jQuery.fn.matchHeight)) {
            $('.same-height').matchHeight();
        }

        if (jQuery.isFunction(jQuery.fn.fractionSlider)) {
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

        //  ============================
        //  = Validate Form function =
        //  ===========================
        $("#contactForm").validate({
            submitHandler: function (form) {
                let utmCode = getCookieUtm('utm_code');
                if (utmCode === undefined) {
                    utmCode = '';
                }

                $.ajax({
                    type: "POST",
                    url: "php/contact.php",
                    data: {
                        "fullName": $("#contactForm #fullName").val(),
                        "email": $("#contactForm #email").val(),
                        "phone": $("#contactForm #phone").val(),
                        "address": $("#contactForm #address").val(),
                        "advertisingSource": utmCode
                    },
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                    }
                });
            },
            rules: {
                fullName: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                address: {
                    required: true
                }
            },
            highlight: function (element) {
                $(element)
                    .closest(".control-group")
                    .removeClass("success")
                    .addClass("error");
            },
            success: function (element) {
                $(element)
                    .closest(".control-group")
                    .removeClass("error")
                    .addClass("success");
            }
        });
    });

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
            $.cookie(domain + prefixKey + '-utm_source', utm_source,  { expires: expiresCookie });
        }

        if (utm_medium != null && utm_medium != '') {
            $.cookie(domain + prefixKey + '-utm_medium', utm_medium,  { expires: expiresCookie });
        }

        if (utm_campaign != null && utm_campaign != '') {
            $.cookie(domain + prefixKey + '-utm_campaign', utm_campaign,  { expires: expiresCookie });
        }

        if (utm_adgroup != null && utm_adgroup != '') {
            $.cookie(domain + prefixKey + '-utm_adgroup', utm_adgroup,  { expires: expiresCookie });
        }

        if (utm_source != null && utm_source != '') {
            $.cookie(domain + prefixKey + '_utm_source', utm_source,  { expires: expiresCookie });
        }

        if (utm_adset != null && utm_adset != '') {
            $.cookie(domain + prefixKey + '-utm_adset', utm_adset,  { expires: expiresCookie });
        }

        if (utm_code != null && utm_code != '') {
            $.cookie(domain + prefixKey + '-utm_code', utm_code,  { expires: expiresCookie });
        }
    }

    function getCookieUtm(key) {
        const domain = window.location.hostname;
        return $.cookie(domain + prefixKey + '-' + key);
    }
});
