$(document).ready(function () {
    setCookieUtm();
    /* ------------------ form info header ------------------ */
    $("#ads-form-header").validate({
        ignore: ":hidden",
        rules: {
            fullname: {
                required: true
            },
            telephone: {
                required: true
            }
        },
        submitHandler: function (form) {
            $(form).find("#btn-send-info-header").hide();
            let utmCode = getCookieUtm('utm_code');
            if (utmCode === undefined) {
                utmCode = '';
            }

            $.ajax({
                type: "POST",
                url: "php/action.php",
                data: {
                    "fullName": $(form).find(".fullname").val(),
                    "phone": $(form).find(".telephone").val(),
                    "advertisingSource": utmCode,
                },
                success: function (response) {
                    $(form).find("#btn-send-info-header").show();
                    if (response.success === true) {
                        $(form).find(".fullname").val('');
                        $(form).find(".telephone").val('');
                        alert('Thành công');
                    } else {
                        alert('Thất bại');
                    }
                }
            });
            return false;
        }
    });

    /* ------------------ form info ------------------ */
    $("#ads-form").validate({
        ignore: ":hidden",
        rules: {
            fullname: {
                required: true
            },
            telephone: {
                required: true
            }
        },
        submitHandler: function (form) {
            $(form).find("#btn-send-info").hide();
            let utmCode = getCookieUtm('utm_code');
            if (utmCode === undefined) {
                utmCode = '';
            }

            $.ajax({
                type: "POST",
                url: "php/action.php",
                data: {
                    "fullName": $(form).find(".fullname").val(),
                    "phone": $(form).find(".telephone").val(),
                    "advertisingSource": utmCode,
                },
                success: function (response) {
                    $(form).find("#btn-send-info").show();
                    if (response.success === true) {
                        $(form).find(".fullname").val('');
                        $(form).find(".telephone").val('');
                        alert('Thành công');
                    } else {
                        alert('Thất bại');
                    }
                }
            });
            return false;
        }
    });

    /* ------------------ form register ------------------ */
    $("#form-register").validate({
        ignore: ":hidden",
        rules: {
            fullname: {
                required: true
            },
            telephone: {
                required: true
            }
        },
        submitHandler: function (form) {
            $(form).find(".btn-register").hide();
            let utmCode = getCookieUtm('utm_code');
            if (utmCode === undefined) {
                utmCode = '';
            }

            $.ajax({
                type: "POST",
                url: "php/action.php",
                data: {
                    "fullName": $(form).find(".fullname").val(),
                    "phone": $(form).find(".telephone").val(),
                    "description": $(form).find(".description").val(),
                    "advertisingSource": utmCode,
                },
                success: function (response) {
                    $(form).find(".btn-register").show();
                    if (response.success === true) {
                        $(form).find(".fullname").val('');
                        $(form).find(".telephone").val('');
                        $(form).find(".description").val('');
                        alert('Thành công');
                    } else {
                        alert('Thất bại');
                    }
                }
            });
            return false;
        }
    });

    /* ------------------ form form-order ------------------ */
    $("#form-order").validate({
        ignore: ":hidden",
        rules: {
            fullname: {
                required: true
            },
            telephone: {
                required: true
            },
            address: {
                required: true
            }
        },
        submitHandler: function (form) {
            $(form).find(".btn-order").hide();
            let utmCode = getCookieUtm('utm_code');
            if (utmCode === undefined) {
                utmCode = '';
            }

            $.ajax({
                type: "POST",
                url: "php/action.php",
                data: {
                    "fullName": $(form).find(".fullname").val(),
                    "phone": $(form).find(".telephone").val(),
                    "phone": $(form).find(".address").val(),
                    "phone": $(form).find(".quantity").val(),
                    "advertisingSource": utmCode,
                },
                success: function (response) {
                    $(form).find(".btn-order").show();
                    if (response.success === true) {
                        $(form).find(".fullname").val('');
                        $(form).find(".telephone").val('');
                        $(form).find(".address").val('');
                        $(form).find(".quantity").val(1);
                        alert('Thành công');
                    } else {
                        alert('Thất bại');
                    }
                }
            });
            return false;
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
