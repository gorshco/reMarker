chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        var newRefs = ['https://www.bing.com/', 'https://www.facebook.com/', 'https://www.google.com/', 'https://www.twitter.com/'];
        var newRef = newRefs[~~(Math.random() * newRefs.length)];
        var gotRef = false;
        for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name == 'Referer') {
                details.requestHeaders[i].value = newRef;
                var gotRef = true;
                break;
            }
        }
        if (!gotRef) {
            details.requestHeaders.push({
                name: "Referer",
                value: newRef
            })
        };
        return {
            requestHeaders: details.requestHeaders
        };
    }, {
        urls: ['https://www.haaretz.co.il/*', 'https://www.haaretz.com/*', 'https://www.themarker.com/*']
    },
    ['blocking', 'requestHeaders']
);