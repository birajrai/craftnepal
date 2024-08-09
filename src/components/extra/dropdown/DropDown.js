import React, { useState } from 'react';
import styles from './main.module.css'; // Updated for CSS Modules
import CustomMarkDown from '../CustomMarkDown';

const DropDown = ({ show, toggle, data }) => {
    return (
        <div className={styles.dropdownBox}>
            <div className={styles.dropdownHeader} onClick={() => toggle(data.title)}>
                {data.title}
                <i className={`fa fa-chevron-${show === data.title ? 'up' : 'down'} ${styles.downIcon}`}></i>
            </div>
            <div
                className={
                    show === data.title ? `${styles.dropdownContent} ${styles.dropdownShow}` : styles.dropdownContent
                }
            >
                {show === data.title && (
                    <div className={styles.dropDownText}>
                        <CustomMarkDown content={data.text} />
                    </div>
                )}
            </div>
        </div>
    );
};

const DropDowns = ({ data }) => {
    const [selected, setSelected] = useState(null);

    const toggle = header => {
        setSelected(prevSelected => (prevSelected === header ? null : header));
    };

    return (
        <>
            {data.map(dropdown => (
                <DropDown key={dropdown.title} show={selected} toggle={toggle} data={dropdown} />
            ))}
        </>
    );
};

export default DropDowns;
