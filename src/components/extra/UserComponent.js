import React, { useContext, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserContext } from '../../providers/UserProvider';
import config from '../../config.json';
import styles from './user.module.css';

const UserComponent = () => {
    const [user, gettingUser] = useContext(UserContext);
    const userMenuref = useRef();

    return (
        <div className={styles.userComponent}>
            <dialog ref={userMenuref} className={styles.userDialog}>
                <div className={styles.dialogContainner}>
                    <div className={styles.dialogHeader}>
                        <b className="">You are admin! This is what you can do {':)'}</b>
                        <i
                            className="fa fa-window-close dialog-close"
                            onClick={() => userMenuref.current.close('')}
                        ></i>
                    </div>

                    <Link href="/manage-gallery" className={styles.dialogOptions}>
                        Manage Gallery
                    </Link>
                    <Link href="/guidecms" className={styles.dialogOptions}>
                        GuideCMS
                    </Link>
                    <Link href="/soon" className={styles.dialogOptions}>
                        Soon
                    </Link>
                    <Link href="/soon" className={styles.dialogOptions}>
                        Soon
                    </Link>
                    <Link href="/soon" className={styles.dialogOptions}>
                        Soon
                    </Link>
                </div>
            </dialog>
            {user == null || gettingUser || user.err ? (
                <div className={styles.mybutton} onClick={() => (window.location = config.baseUrl + config.login)}>
                    {/* <Image src={discordIcon} className={styles.loginIcon} /> */}
                    Login
                </div>
            ) : (
                <Image
                    className={styles.userImage}
                    onClick={() => (user.isAdmin ? userMenuref.current.showModal() : '')}
                    width={100} // specify the width of the image
                    height={100} // specify the height of the image
                    src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`}
                />
            )}
        </div>
    );
};

export default UserComponent;
