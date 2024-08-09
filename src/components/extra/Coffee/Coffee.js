import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './coffee.module.css';

const Coffee = () => {
    const [show, toggle] = useState(false);

    useEffect(() => {
        if (show) {
            // do something when show is true
        } else {
            // do something when show is false
        }
    }, [show]);

    return (
        <div>
            <Head>
                <title>Coffee</title>
            </Head>
            <div className={show ? `${styles.CoffeeContainner} ${styles.coffeeShow}` : styles.CoffeeContainner}>
                <i className="fa fa-coffee coffee" onClick={() => toggle(!show)}></i>
                <div className={styles.coffeeHeader}>
                    <b className={styles.normaltext}>Chya Kham na {':)'}</b>
                </div>
                <div className={styles.coffContent}>
                    <img
                        className={styles.supportImage}
                        width={100} // specify the width of the image
                        height={100} // specify the height of the image
                        src="https://media.discordapp.net/attachments/725600128852820039/853620336716283934/IMG_20210613_184625.jpg?width=523&height=663"
                    />
                </div>
            </div>
        </div>
    );
};

export default Coffee;
