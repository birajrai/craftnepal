import React, { useEffect, useState } from 'react';
import './nav.module.css';
import './mobile.module.css';

import Button from '../extra/UserComponent';
import { useRouter } from 'next/router';
import { clearScrollHistory } from '../extra/Clearscroll';
import UserComponent from '../extra/UserComponent';

const Nav = props => {
    const { selected, focused } = props;
    const [mobilenav, setmobilenav] = useState(false);
    const router = useRouter();

    let dynamic = false;
    let STT = false;
    const handleScroll = e => {
        const scrollToTop = document.getElementById('scrollToTop');
        if (window.scrollY > 500) {
            if (scrollToTop && !STT) {
                scrollToTop.classList.add('showScrollToTop');
                STT = true;
            }
        } else {
            if (scrollToTop && STT) {
                scrollToTop.classList.remove('showScrollToTop');
                STT = false;
            }
        }
        if (mobilenav) return;
        const element = document.getElementsByClassName('navbar')[0];
        if (!focused) {
            if (window.scrollY > 10 && !dynamic) {
                element.classList.add('dynamicNav');
                dynamic = true;
            }
            if (window.scrollY < 5 && dynamic && !focused) {
                element.classList.remove('dynamicNav');
                dynamic = false;
            }
        } else {
            if (!dynamic) {
                element.classList.add('dynamicNav');
                dynamic = true;
            }
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [mobilenav, focused]);

    const handleMenu = () => {
        document.getElementsByClassName('mobileNavLinks')[0].classList.toggle('openMobileNav');
        document.getElementsByClassName('navbar')[0].classList.toggle('solidNav');
        const button = document.getElementsByClassName('mybutton')[0];
        if (button) button.classList.toggle('showButton');
    };

    const navigateTo = path => {
        router.push(path);
        clearScrollHistory();
    };

    return (
        <>
            <div className="navSpace"></div>
            <div className={focused ? 'navbar dynamicNav2' : 'navbar'}>
                <div className="navLogo" onClick={() => navigateTo('/')}>
                    <img src="/assets/svg/CN.svg" className="logo" alt="Logo" />
                </div>
                <div className="navLinks">
                    <div
                        className={'nav ' + (selected === 'stats' ? 'selected' : '')}
                        onClick={() => navigateTo('/stats')}
                    >
                        <img className="navImg" src="/assets/images/stats.png" alt="Stats" />
                        <div>Stats</div>
                        <i className="fa fa-chevron-down navDrop"></i>
                    </div>
                    <div className="subNav" onClick={() => navigateTo('/leaderboard')}>
                        <div>Leaderboard</div>
                    </div>
                    <div
                        className={'nav ' + (selected === 'feed' ? 'selected' : '')}
                        onClick={() => navigateTo('/feed')}
                    >
                        <img className="navImg" src="/assets/images/feed.png" alt="Feed" />
                        <div>Feed</div>
                    </div>
                    <div
                        className={'nav ' + (selected === 'guide' ? 'selected' : '')}
                        onClick={() => navigateTo('/guide')}
                    >
                        <img className="navImg" src="/assets/images/guide.png" alt="Guide" />
                        <div>Guide</div>
                    </div>
                    <div
                        className={'nav ' + (selected === 'gallery' ? 'selected' : '')}
                        onClick={() => navigateTo('/gallery')}
                    >
                        <img className="navImg" src="/assets/images/icons/gallery.png" alt="Gallery" />
                        <div>Fotos</div>
                    </div>
                    <div className={'nav ' + (selected === 'map' ? 'selected' : '')} onClick={() => navigateTo('/map')}>
                        <img className="navImg" src="/assets/images/pin.png" alt="Map" />
                        <div>Map</div>
                    </div>
                </div>
                <UserComponent />
                <i className="material-icons menuIcon" onClick={handleMenu}>
                    menu
                </i>
                <div className="mobileNavLinks">
                    <div className={'nav ' + (selected === 'home' ? 'selected' : '')} onClick={() => navigateTo('/')}>
                        <img className="navImg" src="/assets/images/home.png" alt="Home" />
                        <div>Home</div>
                    </div>
                    <div id="statsmob" className={'subnavParent nav ' + (selected === 'stats' ? 'selected' : '')}>
                        <img className="navImg" src="/assets/images/stats.png" alt="Stats" />
                        <div className="subNavContainnerMob">
                            <div className="mobsubNav" onClick={() => navigateTo('/stats')}>
                                Stats
                            </div>
                            <div className="mobsubNav" onClick={() => navigateTo('/leaderboard')}>
                                Leaderboard
                            </div>
                        </div>
                    </div>
                    <div
                        className={'nav ' + (selected === 'feed' ? 'selected' : '')}
                        onClick={() => navigateTo('/feed')}
                    >
                        <img className="navImg" src="/assets/images/feed.png" alt="Feed" />
                        <div>Feed</div>
                    </div>
                    <div
                        className={'nav ' + (selected === 'guide' ? 'selected' : '')}
                        onClick={() => navigateTo('/guide')}
                    >
                        <img className="navImg" src="/assets/images/guide.png" alt="Guide" />
                        <div>Guide</div>
                    </div>
                    <div
                        className={'nav ' + (selected === 'gallery' ? 'selected' : '')}
                        onClick={() => navigateTo('/gallery')}
                    >
                        <img className="navImg" src="/assets/images/icons/gallery.png" alt="Gallery" />
                        <div>Fotos</div>
                    </div>
                    <div className={'nav ' + (selected === 'map' ? 'selected' : '')} onClick={() => navigateTo('/map')}>
                        <img className="navImg" src="/assets/images/pin.png" alt="Map" />
                        <div>Map</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
