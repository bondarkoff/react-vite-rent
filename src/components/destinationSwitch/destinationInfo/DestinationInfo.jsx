import React from 'react';
import styles from '../DestinationSwitch.module.scss';

const DestinationInfo = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <div className={styles.itemTitle}>Locations</div>
                <div className='d-flex flex-row aic jcsb mt-8'>
                    <select className={styles.city} name='city' id='city' defaultValue='default'>
                        <option value='default'>Select Your City</option>
                        <option value='kyiv'>Kyiv</option>
                        <option value='lviv'>Lviv</option>
                        <option value='kherson'>Kherson</option>
                        <option value='kharkiv'>Kharkiv</option>
                    </select>
                    <img
                        className={styles.arrowDown}
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
                <div className='d-flex flex-row aic jcsb mt-8 pos-r'>
                    <input
                        className={styles.date}
                        type='date'
                        name='calendar'
                        min='2023-03-01'
                        max='2024-01-01'
                        placeholder='Date'
                    />
                </div>
                <div className={styles.divider}></div>
            </div>
            <div className={styles.item}>
                <div className={styles.itemTitle}>Time</div>
                <div className='d-flex flex-row aic jcsb mt-8'>
                    <input className={styles.time} type='time' id='time' name='time' />
                </div>
            </div>
        </div>
    );
};

export default DestinationInfo;
