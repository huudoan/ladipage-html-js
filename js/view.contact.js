var Contact = {
    initialized: false,
    initialize: function () {
        if (this.initialized) return;
        this.initialized = true;
        this.build();
        this.events();
    },

    build: function () {
        this.validations();
    },

    events: function () {
    },

    validations: function () {
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
                        "name": $("#contactForm #name").val(),
                        "email": $("#contactForm #email").val(),
                        "subject": $("#contactForm #subject").val(),
                        "message": $("#contactForm #message").val(),
                        "advertisingSource": utmCode
                    },
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                    }
                });
            },
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
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
    }
};

Contact.initialize();
