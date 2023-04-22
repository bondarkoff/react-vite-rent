import React from 'react';
import styles from './header.module.scss';

import { Link } from 'react-router-dom';

const Header = ({ searchValue, setSearchValue, onChangeSearchInput }) => {
    return (
        <header>
            <div className='container'>
                <div className='d-flex flex-row jcsb aic'>
                    <div className='d-flex jcsb'>
                        <Link to='/' className={styles.logotype}>
                            MORENT
                        </Link>
                        <div action='#' className='pos-r'>
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
                                onChange={onChangeSearchInput}
                                value={searchValue}
                            />
                            {searchValue ? (
                                <img
                                    className={styles.filter_icon}
                                    width={24}
                                    height={24}
                                    src='./images/close.svg'
                                    alt='Close'
                                    onClick={() => setSearchValue('')}
                                />
                            ) : (
                                <img
                                    className={styles.filter_icon}
                                    width={24}
                                    height={24}
                                    src='./images/filter.svg'
                                    alt='Filter'
                                />
                            )}
                        </div>
                    </div>
                    <div className='d-flex flex-row jcsb aic'>
                        <Link to='/favorite' className={styles.user}>
                            <img width={24} height={24} src='./images/heart.svg' alt='Favorite' />
                        </Link>
                        <Link to='/notifications' className={styles.user}>
                            <img
                                width={24}
                                height={24}
                                src='./images/notification.svg'
                                alt='Notification'
                            />
                        </Link>
                        <Link to='/settings' className={styles.user}>
                            <img
                                width={24}
                                height={24}
                                src='./images/settings.svg'
                                alt='Settings'
                            />
                        </Link>
                        <Link to='/profile' className={styles.user}>
                            <img width={24} height={24} src='./images/profile.svg' alt='Profile' />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
