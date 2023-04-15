import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='wrapper d-flex jcsb'>
                    <div className='text'>
                        <a href='#' className={styles.title}>
                            MORENT
                        </a>
                        <div className={styles.subtitle}>
                            Our vision is to provide convenience<br></br>and help increase your
                            sales business.
                        </div>
                    </div>
                    <div className='social d-flex jcsb'>
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
                        <div className={styles.socialItem}>
                            <div className={styles.socialItemTitle}>Socials</div>
                            <ul className={styles.socialItemLink}>
                                <li>
                                    <a href='#'>Discord</a>
                                </li>
                                <li>
                                    <a href='#'>Instagram</a>
                                </li>
                                <li>
                                    <a href='#'>Twitter</a>
                                </li>
                                <li>
                                    <a href='#'>Facebook</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className='d-flex jcsb mt-48'>
                    <div className={styles.rightsText}>©2022 MORENT. All rights reserved</div>
                    <div className={styles.rightsRules}>
                        <a href='#'>Privacy & Policy</a>
                        <a href='#'>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
