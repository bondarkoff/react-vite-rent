import React from 'react';
import styles from './mainCarCard.module.scss';

const MainCarCard = () => {
    return (
        <div className='d-flex flex-row jcsb aic'>
            <div className={styles.card}>
                <div className='p-24'>
                    <div className={styles.title}>
                        The Best Platform<br></br> for Car Rental
                    </div>
                    <div className={styles.subtitle}>
                        Ease of doing a car rental safely and <br></br>reliably. Of course at a low
                        price.
                    </div>
                    <button className={styles.button}>Rental Car</button>
                    <img className={styles.photo} src='./images/cars/bg_1.png' alt='Car' />
                </div>
            </div>
            <div className={styles.secondCard}>
                <div className='p-24'>
                    <div className={styles.title}>
                        Easy way to rent a <br></br>car at a low price
                    </div>
                    <div className={styles.subtitle}>
                        Providing cheap car rental services <br></br>and safe and comfortable
                        facilities.
                    </div>
                    <button className={styles.secondButton}>Rental Car</button>
                    <img className={styles.photo} src='./images/cars/bg_2.png' alt='Car' />
                </div>
            </div>
        </div>
    );
};

export default MainCarCard;
