import ContentLoader from 'react-content-loader';
import { Link } from 'react-router-dom';

import styles from './Order.module.scss';
const Confirmation = ({ loading = false, props }) => {
    return (
        <div className={styles.billing}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={852}
                    height={336}
                    viewBox='0 0 852 336'
                    backgroundColor='#a0b5ff'
                    foregroundColor='#f6f7f9'
                    {...props}>
                    <rect x='0' y='0' rx='10' ry='10' width='116' height='20' />
                    <rect x='0' y='35' rx='10' ry='10' width='102' height='20' />
                    <rect x='0' y='100' rx='10' ry='10' width='800' height='25' />
                    <rect x='0' y='135' rx='10' ry='10' width='800' height='25' />
                    <rect x='0' y='200' rx='10' ry='10' width='100' height='45' />
                    <rect x='0' y='270' rx='10' ry='10' width='600' height='20' />
                    <rect x='0' y='300' rx='10' ry='10' width='600' height='20' />
                </ContentLoader>
            ) : (
                <>
                    <div className={styles.billingTitle}>Confirmation</div>
                    <div className='d-flex jcsb'>
                        <div className={styles.billingHeader}>
                            <div className={styles.billingSubtitle}>
                                We are getting to the end. Just few clicks and your rental is ready!
                            </div>
                        </div>
                        <div className={styles.billingStep}>Step 4 of 4</div>
                    </div>
                    <div className={styles.billingInfoItem}>
                        <div className={styles.confirmation}>
                            <input type='checkbox' required id='first' />
                            <label htmlFor='first'>
                                I agree with sending an Marketing and newsletter emails. No spam,
                                promissed!
                            </label>
                        </div>
                        <div className={styles.confirmation}>
                            <input type='checkbox' required id='second' />
                            <label htmlFor='second'>
                                I agree with our {''}
                                <Link className={styles.link} target='_blank' to='/terms'>
                                    terms and conditions
                                </Link>
                                {''} and {''}
                                <Link className={styles.link} target='_blank' to='/privacy'>
                                    privacy policy
                                </Link>
                                .
                            </label>
                        </div>
                    </div>
                    <div className=''>
                        <button className={styles.button}>Rent Now</button>
                    </div>
                    <img
                        className='mt-32 mb-16'
                        width={32}
                        height={32}
                        src='/images/safety.png'
                        alt='Your data are safe'
                    />
                    <div className='d-flex flex-col'>
                        <div className={styles.billingTitle}>All your data are safe</div>
                        <div className={styles.billingSubtitle}>
                            We are using the most advanced security to provide you the best
                            experience ever.
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Confirmation;
