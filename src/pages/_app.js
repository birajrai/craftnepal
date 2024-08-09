import React from 'react';
import '../styles/global.css'; // Ensure the path is correct

import { UserProvider } from '../providers/UserProvider';
import { SocketProvider } from '../providers/SocketProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { ParallaxProvider } from 'react-scroll-parallax';
function MyApp({ Component, pageProps }) {
    return (
        <React.StrictMode>
            <HelmetProvider>
                <Helmet>
                    <meta
                        property="og:image"
                        content="https://cdn.discordapp.com/attachments/1101600766533308496/1102489437268627456/CN.png"
                        width={100}
                        height={100}
                    />
                </Helmet>
                <UserProvider>
                    <SocketProvider>
                        {/* <ParallaxProvider> */}
                        <Component {...pageProps} />
                        {/* </ParallaxProvider> */}
                    </SocketProvider>
                </UserProvider>
            </HelmetProvider>
        </React.StrictMode>
    );
}

export default MyApp;
