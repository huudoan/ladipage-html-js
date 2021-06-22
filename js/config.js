requirejs.config({
    baseUrl: "js/lib",
    paths: {
        "jquery": "jquery.min",
        "jquery-cookie": "jquery.cookie.min",
        "bootstrap": "bootstrap.min",
        "smartmenus": "jquery.smartmenus.min",
        "bssmartmenus": "jquery.smartmenus.bootstrap.min",
        "fractionslider": "jquery.fractionslider.min",
        "scrolltofixed": "jquery-scrolltofixed.min",
        "jquery-validate": "jquery.validate.min"
    },
    shim: {
        'jquery-cookie': {
            'deps': ['jquery']
        },
        'bootstrap': {
            'deps': ['jquery']
        },
        'smartmenus': {
            'deps': ['jquery', 'bootstrap']
        },
        'bssmartmenus': {
            'deps': ['jquery', 'bootstrap', 'smartmenus']
        },
        'fractionslider': {
            'deps': ['jquery']
        },
        'scrolltofixed': {
            'deps': ['jquery']
        },
        'jquery-validate': {
            'deps': ['jquery']
        }
    }
});

// Load main
requirejs(["../main"]);
