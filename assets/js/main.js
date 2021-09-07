var messagesName = 'Họ tên bắt buộc';
var messagesPhone = 'Số điện thoại bắt buộc';
$(document).ready(function () {
    setCookieUtm();
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        messagesName = '*';
        messagesPhone = '*';
    }

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
        messages: {
            fullname: {
                required: messagesName,
            },
            telephone: {
                required: messagesPhone,
            },
        },
        submitHandler: function (form) {
            $('#loading-request').show();
            $(form).find("#btn-send-info-header").prop('disabled', true);
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
                    $('#loading-request').hide();
                    $(form).find("#btn-send-info-header").prop('disabled', false);
                    if (response.success === true) {
                        $(form).find(".fullname").val('');
                        $(form).find(".telephone").val('');
                        $('#modal-success').modal('show');
                    } else {
                        $('#modal-notif').modal('show');
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
        messages: {
            fullname: {
                required: "Họ tên bắt buộc",
            },
            telephone: {
                required: "Số điện thoại bắt buộc",
            },
        },
        submitHandler: function (form) {
            $('#loading-request').show();
            $(form).find("#btn-send-info").prop('disabled', true);
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
                    $('#loading-request').hide();
                    $(form).find("#btn-send-info").prop('disabled', false);
                    if (response.success === true) {
                        $(form).find(".fullname").val('');
                        $(form).find(".telephone").val('');
                        $('#modal-success').modal('show');
                    } else {
                        $('#modal-notif').modal('show');
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
        messages: {
            fullname: {
                required: "Họ tên bắt buộc",
            },
            telephone: {
                required: "Số điện thoại bắt buộc",
            },
        },
        submitHandler: function (form) {
            $('#loading-request').show();
            $(form).find(".btn-register").prop('disabled', true);
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
                    $('#loading-request').hide();
                    $(form).find(".btn-register").prop('disabled', false);
                    if (response.success === true) {
                        $(form).find(".fullname").val('');
                        $(form).find(".telephone").val('');
                        $(form).find(".description").val('');
                        $('#modal-success').modal('show');
                    } else {
                        $('#modal-notif').modal('show');
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
        messages: {
            fullname: {
                required: "Họ tên bắt buộc",
            },
            telephone: {
                required: "Số điện thoại bắt buộc",
            },
            address: {
                required: "Địa chỉ bắt buộc",
            },
        },
        submitHandler: function (form) {
            $('#loading-request').show();
            $(form).find(".btn-order").prop('disabled', true);
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
                    $('#loading-request').hide();
                    $(form).find(".btn-order").prop('disabled', false);
                    if (response.success === true) {
                        $(form).find(".fullname").val('');
                        $(form).find(".telephone").val('');
                        $(form).find(".address").val('');
                        $(form).find(".quantity").val(1);
                        $('#modal-success').modal('show');
                    } else {
                        $('#modal-notif').modal('show');
                    }
                }
            });
            return false;
        }
    });

    $(document).on("click","#close-modal",function() {
        $('#modal-notif').modal('hide');
    });

    $(document).on("click","#btn-continue",function() {
        $('#modal-success').modal('hide');
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
