'use strict';
var simplecookie = (function() {
    return {
        get: function(name) {
            var array = decodeURIComponent(document.cookie).split('; '),
                cookie;

            for (var i=0; i<array.length; i++) {
                cookie = array[i].split('=');
                if (cookie[0] === name) {
                    return cookie[1];
                }
            }

            return false;
        },

        set: function(name, value, expiration, path, domain, secure) {
            var expiration_string = "",
                date;

            if (expiration) {
                expiration_string = "; expires=";

                switch (typeof expiration) {
                    case "string":
                        expiration_string += expiration;
                        break;
                    case "date":
                        expiration_string += expiration.toUTCString();
                        break;
                    case "number":
                        date = new Date(expiration);
                        expiration_string +=date.toUTCString();
                        break;
                    default:
                        date = new Date();
                        expiration_string += date.toUTCString();
                        break;
                }
            }

            document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expiration_string + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "") + (secure ? "; secure" : "");
        },

        unset: function(name) {
            this.set(name, null, Date.now());
        }
    };
})();
