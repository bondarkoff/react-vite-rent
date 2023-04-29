import React from 'react';
import ContentLoader from 'react-content-loader';
import { Link } from 'react-router-dom';

import styles from './mainCarCard.module.scss';

const MainCarCard = ({ loading = false, props }) => {
    return (
        <div className='d-flex flex-row jcsb aic'>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={650}
                    height={390}
                    viewBox='0 0 650 390'
                    backgroundColor='#a0b5ff'
                    foregroundColor='#f6f7f9'
                    {...props}>
                    <rect x='0' y='30' rx='10' ry='10' width='640' height='360' />
                </ContentLoader>
            ) : (
                <div className={styles.card}>
                    <div className='p-24'>
                        <div className={styles.title}>
                            The Best Platform<br></br> for Car Rental
                        </div>
                        <div className={styles.subtitle}>
                            Ease of doing a car rental safely and <br></br>reliably. Of course at a
                            low price.
                        </div>
                        <Link to='/cars/1' className={styles.button}>
                            Rental Car
                        </Link>
                        <img className={styles.photo} src='./images/cars/bg_1.png' alt='Car' />
                    </div>
                </div>
            )}
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={650}
                    height={390}
                    viewBox='0 0 650 390'
                    backgroundColor='#a0b5ff'
                    foregroundColor='#f6f7f9'
                    {...props}>
                    <rect x='0' y='30' rx='10' ry='10' width='640' height='360' />
                </ContentLoader>
            ) : (
                <div className={styles.secondCard}>
                    <div className='p-24'>
                        <div className={styles.title}>
                            Easy way to rent a <br></br>car at a low price
                        </div>
                        <div className={styles.subtitle}>
                            Providing cheap car rental services <br></br>and safe and comfortable
                            facilities.
                        </div>
                        <Link to='/cars/2' className={styles.secondButton}>
                            Rental Car
                        </Link>
                        <img className={styles.photo} src='./images/cars/bg_2.png' alt='Car' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainCarCard;
