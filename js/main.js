$(document).ready(function () {
    setCookieUtm();

    $("#form-order").validate({
        ignore: ":hidden",
        rules: {
            fullname_order: {
                required: true
            },
            telephone_order: {
                required: true
            }
        },
        submitHandler: function (form) {
            $(form).find("#btnOrder21").hide();
            let utmCode = getCookieUtm('utm_code');
            if (utmCode === undefined) {
                utmCode = '';
            }

            var tagIds = $(".check_tag:checked").map(function(){
                return $(this).val();
            }).get();
            if (tagIds === undefined) {
                tagIds = [];
            }

            $.ajax({
                type: "POST",
                url: "php/action.php",
                data: $(form).serialize(),
                data: {
                    "fullName": $(form).find("#fullname_order").val(),
                    "phone": $(form).find("#telephone_order").val(),
                    "advertisingSource": utmCode,
                    "tags": tagIds,
                },
                success: function (response) {
                    $(form).find("#btnOrder21").show();
                    $(form).find("#fullname_order").val('');
                    $(form).find("#telephone_order").val('');
                    if (response.success === true) {
                        alert('Thành công');
                    } else {
                        alert('Thất bại');
                    }
                }
            });
            return false;
        }
    });

    $("#formDeal213").validate({
        ignore: ":hidden",
        rules: {
            customer_fullname: {
                required: true
            },
            customer_telephone: {
                required: true
            }
        },
        submitHandler: function (form) {
            $(form).find("#btnDeal212").hide();
            let utmCode = getCookieUtm('utm_code');
            if (utmCode === undefined) {
                utmCode = '';
            }

            var tagIds = $(".check_tag:checked").map(function(){
                return $(this).val();
            }).get();
            if (tagIds === undefined) {
                tagIds = [];
            }

            $.ajax({
                type: "POST",
                url: "php/action.php",
                data: $(form).serialize(),
                data: {
                    "fullName": $(form).find("#customer_fullname").val(),
                    "phone": $(form).find("#customer_telephone").val(),
                    "advertisingSource": utmCode,
                    "tags": tagIds,
                },
                success: function (response) {
                    $(form).find("#btnDeal212").show();
                    $(form).find("#customer_fullname").val('');
                    $(form).find("#customer_telephone").val('');
                    if (response.success === true) {
                        alert('Thành công');
                    } else {
                        alert('Thất bại');
                    }
                }
            });
            return false;
        }
    });


    /* ------------------ End Document ------------------ */
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
