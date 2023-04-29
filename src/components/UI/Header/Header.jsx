import React from 'react';
import { Link } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

import styles from './Header.module.scss';

const Header = ({ searchValue, setSearchValue, onChangeSearchInput, loading = false, props }) => {
    return (
        <header>
            <div className='container'>
                <div className='d-flex flex-row jcsb aic'>
                    <div className='d-flex jcsb'>
                        {loading ? (
                            <ContentLoader
                                speed={2}
                                width={116}
                                height={45}
                                viewBox='0 0 116 45'
                                backgroundColor='#a0b5ff'
                                foregroundColor='#f6f7f9'
                                {...props}>
                                <rect x='0' y='10' rx='10' ry='10' width='116' height='20' />
                            </ContentLoader>
                        ) : (
                            <Link to='/' className={styles.logotype}>
                                MORENT
                            </Link>
                        )}
                        {loading ? (
                            <ContentLoader
                                speed={2}
                                width={600}
                                height={45}
                                viewBox='0 0 600 45'
                                backgroundColor='#a0b5ff'
                                foregroundColor='#f6f7f9'
                                {...props}>
                                <rect x='100' y='0' rx='10' ry='10' width='492' height='44' />
                            </ContentLoader>
                        ) : (
                            <div action='#' className='pos-r'>
                                <img
                                    className={styles.search_icon}
                                    width={24}
                                    height={24}
                                    src='/images/search.svg'
                                    alt='Search'
                                />
                                <input
                                    type='text'
                                    name='search'
                                    placeholder='Search something here'
                                    className={styles.search}
                                    onChange={onChangeSearchInput}
                                    value={searchValue}
                                    autoComplete='off'
                                />
                                {
                                    searchValue ? (
                                        <img
                                            className={styles.filter_icon}
                                            width={24}
                                            height={24}
                                            src='/images/close.svg'
                                            alt='Close'
                                            onClick={() => setSearchValue('')}
                                        />
                                    ) : null
                                    // <img
                                    //     className={styles.filter_icon}
                                    //     width={24}
                                    //     height={24}
                                    //     src='/images/filter.svg'
                                    //     alt='Filter'
                                    //     id='filter'
                                    //     onClick={handleButtonClick}
                                    // />
                                }
                            </div>
                        )}
                    </div>
                    {loading ? (
                        <ContentLoader
                            speed={2}
                            width={236}
                            height={45}
                            viewBox='0 0 236 45'
                            backgroundColor='#a0b5ff'
                            foregroundColor='#f6f7f9'
                            {...props}>
                            <circle cx='35' cy='30' r='10' />
                            <circle cx='70' cy='30' r='10' />
                            <circle cx='105' cy='30' r='10' />
                        </ContentLoader>
                    ) : (
                        <div className='d-flex flex-row jcsb aic'>
                            <Link to='/favorite' className={styles.user}>
                                <img
                                    width={24}
                                    height={24}
                                    src='/images/heart.svg'
                                    alt='Favorite'
                                />
                            </Link>
                            <Link to='/notifications' className={styles.user}>
                                <img
                                    width={24}
                                    height={24}
                                    src='/images/notification.svg'
                                    alt='Notification'
                                />
                            </Link>
                            <Link to='/settings' className={styles.user}>
                                <img
                                    width={24}
                                    height={24}
                                    src='/images/settings.svg'
                                    alt='Settings'
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
