import React from 'react';
import styles from './DestinationSwitch.module.scss';

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
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>Locations</div>
                        <div className='d-flex flex-row aic jcsb mt-8'>
                            <div className={styles.itemDropdownTitle}>Select your city</div>
                            <img
                                width={14}
                                height={14}
                                src='./images/arrow-down.svg'
                                alt='Arrow Down'
                            />
                        </div>
                        <div className={styles.divider}></div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>Date</div>
                        <div className='d-flex flex-row aic jcsb mt-8'>
                            <div className={styles.itemDropdownTitle}>Select your date</div>
                            <img
                                width={14}
                                height={14}
                                src='./images/arrow-down.svg'
                                alt='Arrow Down'
                            />
                        </div>
                        <div className={styles.divider}></div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>Time</div>
                        <div className='d-flex flex-row aic jcsb mt-8'>
                            <div className={styles.itemDropdownTitle}>Select your time</div>
                            <img
                                width={14}
                                height={14}
                                src='./images/arrow-down.svg'
                                alt='Arrow Down'
                            />
                        </div>
                    </div>
                </div>
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
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>Locations</div>
                        <div className='d-flex flex-row aic jcsb mt-8'>
                            <div className={styles.itemDropdownTitle}>Select your city</div>
                            <img
                                width={14}
                                height={14}
                                src='./images/arrow-down.svg'
                                alt='Arrow Down'
                            />
                        </div>
                        <div className={styles.divider}></div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>Date</div>
                        <div className='d-flex flex-row aic jcsb mt-8'>
                            <div className={styles.itemDropdownTitle}>Select your date</div>
                            <img
                                width={14}
                                height={14}
                                src='./images/arrow-down.svg'
                                alt='Arrow Down'
                            />
                        </div>
                        <div className={styles.divider}></div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>Time</div>
                        <div className='d-flex flex-row aic jcsb mt-8'>
                            <div className={styles.itemDropdownTitle}>Select your time</div>
                            <img
                                width={14}
                                height={14}
                                src='./images/arrow-down.svg'
                                alt='Arrow Down'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationSwitch;
