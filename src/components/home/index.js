import { useEffect } from 'react';
import Image from 'next/image';
import Slider from '../extra/Slider';
import 'aos/dist/aos.css';
import aos from 'aos';
import styles from './main.module.css';

const HomeComponent = () => {
    useEffect(() => {
        aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className={styles.mainComponent}>
            <Image
                src="/assets/images/dharara.png"
                alt="Dharara"
                className={styles.background}
                fill
                style={{ objectFit: 'cover' }}
            />
            <i className="fa fa-angle-double-down icon"></i>
            <div className={styles.mainPage}>
                <div className={`${styles.flexcolumn} ${styles.mainRightContainner}`}>
                    <div
                        className={`${styles.title} ${styles.whitetext}`}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-easing="ease-out-back"
                    >
                        <div className={styles.highlight}>For the</div>
                        Crafters
                        <div className={styles.highlight}>By the</div>
                        Crafters
                    </div>
                    <div className={`${styles.normaltext} ${styles.subtitle}`}>
                        ULTIMATE NEPALESE MINECRAFT SERVER
                        <div className={styles.buttons}>
                            <button
                                className={styles.btn}
                                onClick={() => {
                                    navigator.clipboard.writeText('play.craftnepal.net');
                                    const btn = document.querySelector(`.${styles.btn}`);
                                    btn.classList.toggle('start');
                                    setTimeout(() => {
                                        btn.classList.toggle('start');
                                    }, 1000);
                                }}
                            >
                                <span></span>
                                <p data-start="Copied" data-text="play.craftnepal.net" data-title="JOIN US"></p>
                            </button>
                        </div>
                    </div>
                </div>

                <Image
                    src="/assets/images/craftnepal.svg"
                    alt="CraftNepal Logo"
                    className={styles.mainLogo}
                    data-aos="zoom-out-down"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-easing="ease-out-back"
                    width={200}
                    height={200}
                />
            </div>

            <div className={styles.mainContent}>
                <div
                    className={`${styles.contentTitle} ${styles.whitetext}`}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="500"
                >
                    What is CraftNepal?
                </div>
                <div
                    className={`${styles.contentDesc} ${styles.textcenter}`}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="500"
                >
                    Welcome to CraftNepal, our Minecraft server that has been serving the Minecraft community for over
                    six years with a friendly and welcoming community. With vanilla tweaking plugins, we strive to
                    provide a fun and engaging gaming experience for all players, whether they're Minecraft veterans or
                    new to the game. We're proud to say that over 2000 players have joined our server, and we're excited
                    to welcome even more to explore the vast world of Minecraft, build amazing structures, and make new
                    friends along the way. If you're looking for a well-established and enjoyable Minecraft server, look
                    no further than CraftNepal.
                </div>
                <Image
                    src="/assets/images/hills.png"
                    alt="Hills"
                    className={styles.mainImage}
                    width={800}
                    height={400}
                />
                <hr />

                <div className={styles.rowflex}>
                    <div className={styles.columnflex}>
                        <div
                            className={`${styles.contentTitle} ${styles.whitetext} ${styles.originTitle}`}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="500"
                        >
                            What's the origin?
                        </div>
                        <div
                            className={`${styles.contentDesc} ${styles.textjustify}`}
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                        >
                            CraftNepal has a unique origin story that began with a small group of friends who wanted to
                            play games together back in 2014 - 2015. As the Minecraft hype grew, they decided to create
                            a vanilla survival server called myktmcraft, owned by Cnobi and his friends. The server
                            quickly gained popularity, and players from all over joined to make great memories together.
                            However, as time passed, the hype waned, and the server became less active.
                            <br />
                            <br />
                            In 2019, when Minecraft became popular again, players started to flood in, but Cnobi was too
                            busy to moderate the server. Meanwhile, a new Minecraft community in Nepal had formed:
                            NepaliCrafters, owned by Subu and Code. Subu, who was a moderator in myktm, and the owner of
                            NepaliCrafters and myktmcraft decided to merge their servers and create a bigger server
                            located in Nepal, which they named CraftNepal.
                            <br />
                            <br />
                            Since then, CraftNepal has continued to grow and evolve, and in 2021, they introduced
                            Seasons of Minecraft Survival. This meant the world resets every year, allowing Minecraft
                            players to start a new adventure at every season. Today, in 2023, CraftNepal is still
                            serving Minecraft players, and the community continues to thrive. From its humble beginnings
                            as a group of friends playing games together, to a thriving Minecraft community in Nepal,
                            CraftNepal's journey is a testament to the power of friendship, creativity, and the joy of
                            gaming.
                        </div>
                    </div>
                    <div className={styles.originSlide}>
                        <Slider />
                    </div>
                </div>

                <hr />
                <div className={styles.columnflex}>
                    <div className={`${styles.redtext} ${styles.contentTitle} ${styles.textcenter}`}>Goal?</div>
                    <br />
                    <div
                        className={`${styles.contentTitle} ${styles.whitetext} ${styles.textcenter} ${styles.goal}`}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                    >
                        "We just want to play minecraft :)"
                    </div>
                </div>
                <div className={styles.featureBox}>
                    <div
                        className={`${styles.contentTitle} ${styles.whitetext}`}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                    >
                        Our Features
                    </div>
                    <div className={styles.featuerContainner}>
                        <div
                            className={styles.feature}
                            data-aos="zoom-in"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-easing="ease-out-back"
                        >
                            <Image
                                className={styles.featureImage}
                                src="/assets/images/icons/skills.png"
                                alt="Skills"
                                width={100}
                                height={100}
                            />
                            <div className={styles.featureName}>Skills and Abilities</div>
                            <div className={`${styles.featureDesc} ${styles.textcenter}`}>
                                Level up your skills in mining, farming etc. to gain extra Abilities
                            </div>
                        </div>
                        <div
                            className={styles.feature}
                            data-aos="zoom-in"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-easing="ease-out-back"
                        >
                            <Image
                                className={styles.featureImage}
                                src="/assets/images/icons/worldmap.png"
                                alt="World Map"
                                width={100}
                                height={100}
                            />
                            <div className={styles.featureName}>World Map</div>
                            <div className={`${styles.featureDesc} ${styles.textcenter}`}>
                                Find your way back home with this live map
                            </div>
                        </div>
                        <div
                            className={styles.feature}
                            data-aos="zoom-in"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-easing="ease-out-back"
                        >
                            <Image
                                className={styles.featureImage}
                                src="/assets/images/icons/voicemod.png"
                                alt="Voice Mod"
                                width={100}
                                height={100}
                            />
                            <div className={styles.featureName}>Voice Mod</div>
                            <div className={`${styles.featureDesc} ${styles.textcenter}`}>
                                Talk to your friends within the game in 3d environment.
                            </div>
                        </div>
                        <div
                            className={styles.feature}
                            data-aos="zoom-in"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-easing="ease-out-back"
                        >
                            <Image
                                className={styles.featureImage}
                                src="/assets/images/icons/waypoints.png"
                                alt="WayPoints"
                                width={100}
                                height={100}
                            />
                            <div className={styles.featureName}>WayPoints</div>
                            <div className={`${styles.featureDesc} ${styles.textcenter}`}>
                                Need to travel far? No, worries. Teleport to different location in the world in seconds.
                            </div>
                        </div>
                        <div
                            className={styles.feature}
                            data-aos="zoom-in"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-easing="ease-out-back"
                        >
                            <Image
                                className={styles.featureImage}
                                src="/assets/images/icons/others.png"
                                alt="Timber"
                                width={100}
                                height={100}
                            />
                            <div className={styles.featureName}>Timber</div>
                            <div className={`${styles.featureDesc} ${styles.textcenter}`}>
                                Tree falls upon cutting it from root by an axe
                            </div>
                        </div>
                        <div
                            className={styles.feature}
                            data-aos="zoom-in"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-easing="ease-out-back"
                        >
                            <Image
                                className={styles.featureImage}
                                src="/assets/images/icons/rank.png"
                                alt="Ranks"
                                width={100}
                                height={100}
                            />
                            <div className={styles.featureName}>Ranks</div>
                            <div className={`${styles.featureDesc} ${styles.textcenter}`}>
                                Automated ranking system that promotes players depending on their gameplay
                            </div>
                        </div>
                        <div
                            className={styles.feature}
                            data-aos="zoom-in"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-easing="ease-out-back"
                        >
                            <Image
                                className={styles.featureImage}
                                src="/assets/images/icons/market.png"
                                alt="Market Place"
                                width={100}
                                height={100}
                            />
                            <div className={styles.featureName}>Market Place</div>
                            <div className={`${styles.featureDesc} ${styles.textcenter}`}>
                                A market place where you can open your shop to buy/sell
                            </div>
                        </div>
                        <div
                            className={styles.feature}
                            data-aos="zoom-in"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-easing="ease-out-back"
                        >
                            <Image
                                className={styles.featureImage}
                                src="/assets/images/icons/discord2.png"
                                alt="Sync Discord"
                                width={100}
                                height={100}
                            />
                            <div className={styles.featureName}>Sync Discord</div>
                            <div className={`${styles.featureDesc} ${styles.textcenter}`}>
                                Get your roles from ingame to discord. A fully automated rank sync.
                            </div>
                        </div>
                        <div
                            className={styles.feature}
                            data-aos="zoom-in"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-easing="ease-out-back"
                        >
                            <Image
                                className={styles.featureImage}
                                src="/assets/images/icons/enchant.png"
                                alt="Vanilla Tweaks"
                                width={100}
                                height={100}
                            />
                            <div className={styles.featureName}>Vanilla Tweaks</div>
                            <div className={`${styles.featureDesc} ${styles.textcenter}`}>
                                Datapacks such as Dragon drop elytra, armoured elytra and so on
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;
