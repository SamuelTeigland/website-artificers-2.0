// Setting up tracking for Google Ads

import { useEffect } from "react";

export default function Google() {
    useEffect(() => {
        // Helper function to delay opening a URL until a gtag event is sent.
        // Call it in response to an action that should navigate to a URL.
        (function gtagSendEvent(url) {
            var callback = function () {
            if (typeof url === 'string') {
                window.location = url;
            }
            };
            gtag('event', 'conversion_event_begin_checkout', {
            'event_callback': callback,
            'event_timeout': 2000,
            // <event_parameters>
            });
            return false;
        });
    }, []);
}