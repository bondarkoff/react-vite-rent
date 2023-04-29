import React from 'react';
import { Link } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

import styles from './Footer.module.scss';

const Footer = ({ loading = false }, props) => {
    return (
        <footer>
            <div className='container'>
                <div className='wrapper d-flex jcsb'>
                    {loading ? (
                        <ContentLoader
                            speed={2}
                            width={116}
                            height={40}
                            viewBox='0 0 116 40'
                            backgroundColor='#a0b5ff'
                            foregroundColor='#f6f7f9'
                            {...props}>
                            <rect x='0' y='0' rx='10' ry='10' width='116' height='16' />
                            <rect x='0' y='21' rx='10' ry='10' width='100' height='16' />
                        </ContentLoader>
                    ) : (
                        <div className='text'>
                            <Link to='/' className={styles.title}>
                                MORENT
                            </Link>
                            <div className={styles.subtitle}>
                                Our vision is to provide convenience<br></br>and help increase your
                                sales business.
                            </div>
                        </div>
                    )}
                    <div className='social d-flex jcsb'>
                        {loading ? (
                            <ContentLoader
                                speed={2}
                                width={116}
                                height={148}
                                viewBox='0 0 116 148'
                                backgroundColor='#a0b5ff'
                                foregroundColor='#f6f7f9'
                                {...props}>
                                <rect x='0' y='0' rx='10' ry='10' width='116' height='16' />
                                <rect x='0' y='50' rx='10' ry='10' width='116' height='16' />
                                <rect x='0' y='75' rx='10' ry='10' width='116' height='16' />
                                <rect x='0' y='100' rx='10' ry='10' width='116' height='16' />
                                <rect x='-1' y='125' rx='10' ry='10' width='116' height='16' />
                            </ContentLoader>
                        ) : (
                            <div className={styles.socialItem}>
                                <div className={styles.socialItemTitle}>About</div>
                                <ul className={styles.socialItemLink}>
                                    <li>
                                        <a href='#'>How it works</a>
                                    </li>
                                    <li>
                                        <a href='#'>Featured</a>
                                    </li>
                                    <li>
                                        <a href='#'>Partnership</a>
                                    </li>
                                    <li>
                                        <a href='#'>Business Relation</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {loading ? (
                            <div className='ml-50'>
                                <ContentLoader
                                    speed={2}
                                    width={116}
                                    height={148}
                                    viewBox='0 0 116 148'
                                    backgroundColor='#a0b5ff'
                                    foregroundColor='#f6f7f9'
                                    {...props}>
                                    <rect x='0' y='0' rx='10' ry='10' width='116' height='16' />
                                    <rect x='0' y='50' rx='10' ry='10' width='116' height='16' />
                                    <rect x='0' y='75' rx='10' ry='10' width='116' height='16' />
                                    <rect x='0' y='100' rx='10' ry='10' width='116' height='16' />
                                    <rect x='-1' y='125' rx='10' ry='10' width='116' height='16' />
                                </ContentLoader>
                            </div>
                        ) : (
                            <div className={styles.socialItem}>
                                <div className={styles.socialItemTitle}>Community</div>
                                <ul className={styles.socialItemLink}>
                                    <li>
                                        <a href='#'>Events</a>
                                    </li>
                                    <li>
                                        <a href='#'>Blog</a>
                                    </li>
                                    <li>
                                        <a href='#'>Podcast</a>
                                    </li>
                                    <li>
                                        <a href='#'>Invite a friend</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {loading ? (
                            <div className='ml-50'>
                                <ContentLoader
                                    speed={2}
                                    width={116}
                                    height={148}
                                    viewBox='0 0 116 148'
                                    backgroundColor='#a0b5ff'
                                    foregroundColor='#f6f7f9'
                                    {...props}>
                                    <rect x='0' y='0' rx='10' ry='10' width='116' height='16' />
                                    <rect x='0' y='50' rx='10' ry='10' width='116' height='16' />
                                    <rect x='0' y='75' rx='10' ry='10' width='116' height='16' />
                                    <rect x='0' y='100' rx='10' ry='10' width='116' height='16' />
                                    <rect x='-1' y='125' rx='10' ry='10' width='116' height='16' />
                                </ContentLoader>
                            </div>
                        ) : (
                            <div className={styles.socialItem}>
                                <div className={styles.socialItemTitle}>Socials</div>
                                <ul className={styles.socialItemLink}>
                                    <li>
                                        <a href='https://discord.com/' target='_blank'>
                                            Discord
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.instagram.com/' target='_blank'>
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://twitter.com/' target='_blank'>
                                            Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.facebook.com/' target='_blank'>
                                            Facebook
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className='d-flex jcsb mt-48'>
                    {loading ? (
                        <ContentLoader
                            speed={2}
                            width={116}
                            height={20}
                            viewBox='0 0 116 20'
                            backgroundColor='#a0b5ff'
                            foregroundColor='#f6f7f9'
                            {...props}>
                            <rect x='0' y='0' rx='10' ry='10' width='116' height='16' />
                        </ContentLoader>
                    ) : (
                        <div className={styles.rightsText}>©2022 MORENT. All rights reserved</div>
                    )}
                    <div className={styles.rightsRules}>
                        {loading ? (
                            <ContentLoader
                                speed={2}
                                width={296}
                                height={20}
                                viewBox='0 0 296 20'
                                backgroundColor='#a0b5ff'
                                foregroundColor='#f6f7f9'
                                {...props}>
                                <rect x='2' y='0' rx='10' ry='10' width='116' height='16' />
                                <rect x='180' y='0' rx='10' ry='10' width='116' height='16' />
                            </ContentLoader>
                        ) : (
                            <>
                                <Link to='/privacy'>Privacy & Policy</Link>
                                <Link to='/terms'>Terms of Service</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
