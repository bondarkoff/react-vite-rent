import React from 'react';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <a href='#' className={styles.logotype}>
                            MORENT
                        </a>
                        <div action='#' className={styles.form}>
                            <img
                                className={styles.search_icon}
                                width={24}
                                height={24}
                                src='./images/search.svg'
                                alt='Search'
                            />
                            <input
                                type='text'
                                name='search'
                                placeholder='Search something here'
                                className={styles.search}
                            />
                            <img
                                className={styles.filter_icon}
                                width={24}
                                height={24}
                                src='./images/filter.svg'
                                alt='Filter'
                            />
                        </div>
                    </div>
                    <div className={styles.user_wrapper}>
                        <a className={styles.user}>
                            <img width={24} height={24} src='./images/heart.svg' alt='Favorite' />
                        </a>
                        <a className={styles.user}>
                            <img
                                width={24}
                                height={24}
                                src='./images/notification.svg'
                                alt='Notification'
                            />
                        </a>
                        <a className={styles.user}>
                            <img
                                width={24}
                                height={24}
                                src='./images/settings.svg'
                                alt='Settings'
                            />
                        </a>
                        <a className={styles.user}>
                            <img width={24} height={24} src='./images/profile.svg' alt='Profile' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
