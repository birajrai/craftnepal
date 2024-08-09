import Head from 'next/head';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerMain}>
                    <Image src="/assets/svg/craftnepal.svg" alt="CraftNepal Logo" width={50} height={50} />
                    <div className={styles.contentTitle}>CraftNepal</div>
                    <div className={styles.normaltext}>A Minecraft SMP</div>
                </div>
                <div className={styles.usefulLinks}>
                    <div className={styles.contactTitle}>Pages</div>
                    <div className={styles.usefulLink}>
                        <b className={styles.redtext}>Stats</b>
                        <p>Get in-game stats of any player</p>
                    </div>
                    <div className={styles.usefulLink}>
                        <b className={styles.redtext}>Leaderboard</b>
                        <p>It has all leaderboards from ingame including top 100</p>
                    </div>
                    <div className={styles.usefulLink}>
                        <b className={styles.redtext}>Feed</b>
                        <p>Share your memories from ingame by posting here</p>
                    </div>
                    <div className={styles.usefulLink}>
                        <b className={styles.redtext}>Guide</b>
                        <p>All the help that you need is available here</p>
                    </div>
                </div>
                <div className={styles.contactUs}>
                    <div className={styles.contactTitle}>Contacts</div>
                    <iframe
                        src="https://discord.com/widget?id=725033293636042773&theme=dark"
                        width="300"
                        height="250"
                        allowTransparency="true"
                        frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    ></iframe>

                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcraftnepalmc&tabs&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="300"
                        height="130"
                        frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Footer;
