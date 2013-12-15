/*global defer*/
window.defer = (function (window, document, script) {
    var scripts = {},
        firstScript = document.getElementsByTagName(script)[0];

    return function (url) {
        var inc;

        if (typeof scripts[url] === 'undefined') {
            inc = document.createElement(script);
            inc.async = true;
            inc.src = url;
            firstScript.parentNode.insertBefore(inc, firstScript);
            scripts[url] = inc;
        }
    };
})(window, document, 'script');

// Analytics
(function (i, r) {
    i.GoogleAnalyticsObject = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    };
    i[r].l = 1 * new Date();

    i[r]('create', 'UA-28020083-1', 'github.com');
    i[r]('send', 'pageview');

    defer('//www.google-analytics.com/analytics.js');
})(window, 'ga');


// Social can wait a bit. Greedy bastards
window.onload = function () {
    setTimeout(function () {
        // Twitter
        defer('//platform.twitter.com/widgets.js');

        // Google Plus
        defer('https://apis.google.com/js/plusone.js');

        // Disqus
        defer('//todomvc-challenge.disqus.com/embed.js');
    }, 2000);
};
