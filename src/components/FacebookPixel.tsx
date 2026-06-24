import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const FacebookPixel = () => {
    useEffect(() => {
        const initPixel = () => {
            if (window.fbq) {
                window.fbq('init', '1278702021130394');
                window.fbq('track', 'PageView');
            }
            else { setTimeout(initPixel, 100); }
        };

        initPixel();
    }, []);
    return (<>
        <Helmet>
            <script>
                {`             !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1278702021130394');
fbq('track', 'PageView');        `}
            </script>
        </Helmet>
        <noscript>       <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1278702021130394&ev=PageView&noscript=1"
        />     </noscript>     </>);
};


export default FacebookPixel;