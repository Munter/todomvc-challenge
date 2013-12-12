// Analytics
(function (i, s, o, g, r, a, m) {
    i.GoogleAnalyticsObject = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    };
    i[r].l = 1 * new Date();
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

window.ga('create', 'UA-28020083-1', 'github.com');
window.ga('send', 'pageview');

// Social can wait a bit. Greedy bastards
window.onload = function () {
    setTimeout(function () {
        // Twitter
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.async = true;
                js.src = '//platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        })(document, 'script', 'twitter-wjs');

        // Google Plus
        (function () {
            var po = document.createElement('script'),
                s = document.getElementsByTagName('script')[0];
            po.type = 'text/javascript';
            po.async = true;
            po.src = 'https://apis.google.com/js/plusone.js';
            s.parentNode.insertBefore(po, s);
        })();

        // Disqus
        var disqus_shortname = 'todomvc-challenge';
        (function () {
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    }, 2000);
};
