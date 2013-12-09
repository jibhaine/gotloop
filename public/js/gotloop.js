require.config(
    {
        //base url
        baseUrl: 'js/',
        waitSeconds: 20,
        shim: {

            "underscore": {
                "exports": "_"  //attaches "_" to the window object
            },

            "backbone": {
                "deps": ["underscore", "jquery"],
                "exports" : "Backbone"  //attaches "Backbone" to the window object
            }
        },
        paths: {
            "jquery":         "libs/zepto",
            "underscore":     "libs/underscore",
            "backbone":       "libs/backbone"
        }
    }
);

require(
    [
        "jquery",
        "underscore",
        "backbone",
        "modernizr"
    ]
    , function ($, _, Backbone, Modernizr) {

        var gotloop = {
            /** HEADER **/

            /** LOGIN FORM **/
            //show the login header popin
            showLogInField: function () {

            },
            doLogIn: function () {

            },
            /** SIGNIN FORM **/

            showSignInField: function () {

            },
            doSignIn: function () {

            },
            /** LOGOUT **/
            doLogOut: function () {

            },
            /** LOOPUPLOAD FORM **/
            doLoopUpload: function () {

            }

            /** COMMENT FORM **/

            /** LOOP LIST NAV **/

            /** COMMENTS NAV **/

            /** FOLLOWINGS **/

            /** FOLLOWERS **/

            /** FOLLOW **/
        };

        window.gotloop = gotloop;

        return gotloop;
    }
);