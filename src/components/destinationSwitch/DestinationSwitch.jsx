import React from 'react';
import styles from './DestinationSwitch.module.scss';
import DestinationInfo from './destinationInfo/DestinationInfo';

const DestinationSwitch = () => {
    return (
        <div className='d-flex flex-row jcsb aic mt-32'>
            <div className={styles.card}>
                <div className='text'>
                    <div className='d-flex aic'>
                        <div className={styles.bigDot}>
                            <div className={styles.smallDot}></div>
                        </div>
                        <div className={styles.title}>Pick-Up</div>
                    </div>
                </div>
                <DestinationInfo />
            </div>
            <button className={styles.swapButton}>
                <img width={24} height={24} src='./images/swap.svg' alt='Swap Button' />
            </button>
            <div className={styles.card}>
                <div className='text'>
                    <div className='d-flex aic'>
                        <div className={styles.bigSecondDot}>
                            <div className={styles.smallSecondDot}></div>
                        </div>
                        <div className={styles.title}>Drop - Off</div>
                    </div>
                </div>
                <DestinationInfo />
            </div>
        </div>
    );
};

export default DestinationSwitch;
