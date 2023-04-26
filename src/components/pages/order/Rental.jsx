import styles from './Order.module.scss';

const Rental = () => {
    return (
        <div className={styles.billing}>
            <div className={styles.billingTitle}>Rental Info</div>
            <div className='d-flex jcsb'>
                <div className={styles.billingHeader}>
                    <div className={styles.billingSubtitle}>Please select your rental date</div>
                </div>
                <div className={styles.billingStep}>Step 2 of 4</div>
            </div>
            <div className='d-flex aic'>
                <div className={styles.bigDot}>
                    <div className={styles.smallDot}></div>
                </div>
                <div className={styles.title}>Pick - up</div>
            </div>
            <div className={styles.billingInfo}>
                <div className={styles.billingInfoItem}>
                    <div className={styles.billingInfoTitle}>Locations</div>
                    <select
                        className={styles.city}
                        name='city'
                        id='city'
                        defaultValue='default'
                        required>
                        <option value='default'>Select Your City</option>
                        <option value='kyiv'>Kyiv</option>
                        <option value='lviv'>Lviv</option>
                        <option value='kherson'>Kherson</option>
                        <option value='kharkiv'>Kharkiv</option>
                    </select>
                </div>
                <div className={styles.billingInfoItem}>
                    <div className={styles.billingInfoTitle}>Date</div>
                    <input
                        className={styles.date}
                        type='date'
                        name='calendar'
                        min='2023-03-01'
                        max='2024-01-01'
                        placeholder='Date'
                        required
                    />
                </div>
                <div className={styles.billingInfoItem}>
                    <div className={styles.billingInfoTitle}>Time</div>
                    <input className={styles.time} type='time' id='time' name='time' required />
                </div>
            </div>
            <div className='d-flex aic'>
                <div className={styles.bigSecondDot}>
                    <div className={styles.smallSecondDot}></div>
                </div>
                <div className={styles.title}>Drop - off</div>
            </div>
            <div className={styles.billingInfo}>
                <div className={styles.billingInfoItem}>
                    <div className={styles.billingInfoTitle}>Locations</div>
                    <select
                        className={styles.city}
                        name='city'
                        id='city'
                        defaultValue='default'
                        required>
                        <option value='default'>Select Your City</option>
                        <option value='kyiv'>Kyiv</option>
                        <option value='lviv'>Lviv</option>
                        <option value='kherson'>Kherson</option>
                        <option value='kharkiv'>Kharkiv</option>
                    </select>
                </div>
                <div className={styles.billingInfoItem}>
                    <div className={styles.billingInfoTitle}>Date</div>
                    <input
                        className={styles.date}
                        type='date'
                        name='calendar'
                        min='2023-03-01'
                        max='2024-01-01'
                        placeholder='Date'
                        required
                    />
                </div>
                <div className={styles.billingInfoItem}>
                    <div className={styles.billingInfoTitle}>Time</div>
                    <input className={styles.time} type='time' id='time' name='time' required />
                </div>
            </div>
        </div>
    );
};

export default Rental;
