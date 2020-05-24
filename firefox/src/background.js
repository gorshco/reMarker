chrome.webRequest.onBeforeSendHeaders.addListener(
    function(request) {
        var newUAs = [
            'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
            'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
            'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
            'Twitterbot/1.0'
        ];
        var newUA = newUAs[~~(Math.random() * newUAs.length)];
        var gotUA = false;
        for (var i = 0; i < request.requestHeaders.length; ++i) {
            if (request.requestHeaders[i].name == 'User-Agent') {
                request.requestHeaders[i].value = newUA;
                var gotUA = true;
                break;
            }
        }
        if (!gotUA) {
            request.requestHeaders.push({
                name: 'User-Agent',
                value: newUA
            })
        };
        return {
            requestHeaders: request.requestHeaders
        };
    }, {
        urls: ['https://www.haaretz.co.il/*', 'https://www.haaretz.com/*', 'https://www.themarker.com/*']
    },
    ['blocking', 'requestHeaders']
);