import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './slider.module.css';
const gallery = [
    {
        id: 1,
        url: '/assets/images/slider1.png',
    },
    {
        id: 2,
        url: '/assets/images/slider2.png',
    },
    {
        id: 3,
        url: '/assets/images/slider3.png',
    },
    {
        id: 4,
        url: '/assets/images/slider4.png',
    },
    {
        id: 5,
        url: '/assets/images/slider5.png',
    },
];

const Slider = () => {
    var auto = true;
    const [selected, setselected] = useState(1);
    const changeImg = id => {
        const parent = document.getElementById('slider');
        const width = parent.clientWidth;
        parent.scrollTo({ left: width * (id - 1), behavior: 'smooth' });
        const elements = document.getElementsByClassName('index');
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.classList.remove('indexSelected');
        }
        document.getElementById(id + 'i').classList.add('indexSelected');
    };

    useEffect(() => {
        document.getElementById(1 + 'i').classList.add('indexSelected');
    }, []);

    return (
        <div className={styles.sliderBox}>
            <div className={styles.slider} id="slider">
                {gallery.map(image => {
                    return (
                        <div key={image.id + 'image'} id={image.id + 'image'} className={styles.slide}>
                            <img src={image.url} className={styles.sliderImg} />
                        </div>
                    );
                })}
            </div>
            <div className={styles.slideIndex}>
                {gallery.map(image => {
                    return (
                        <i
                            key={image.id + 'i'}
                            id={image.id + 'i'}
                            className={`fa fa-circle ${styles.index}`}
                            onClick={() => changeImg(image.id)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
