import { Link } from 'react-router-dom';
import Footer from '../../UI/footer/Footer';
import Header from '../../UI/header/Header';

import styles from './Order.module.scss';

const Order = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className={styles.order}>
                    <div className={styles.billing}>
                        <div className={styles.billingTitle}>Billing Info</div>
                        <div className='d-flex jcsb'>
                            <div className={styles.billingHeader}>
                                <div className={styles.billingSubtitle}>
                                    Please enter your billing info
                                </div>
                            </div>
                            <div className={styles.billingStep}>Step 1 of 4</div>
                        </div>
                        <div className={styles.billingInfo}>
                            <div className={styles.billingInfoItem}>
                                <div className={styles.billingInfoTitle}>Name</div>
                                <input
                                    className={styles.billingInput}
                                    type='text'
                                    required
                                    placeholder='Your name'
                                />
                            </div>
                            <div className={styles.billingInfoItem}>
                                <div className={styles.billingInfoTitle}>Phone Number</div>
                                <input
                                    className={styles.billingInput}
                                    type='text'
                                    required
                                    placeholder='Phone number'
                                />
                            </div>
                            <div className={styles.billingInfoItem}>
                                <div className={styles.billingInfoTitle}>Address</div>
                                <input
                                    className={styles.billingInput}
                                    type='text'
                                    required
                                    placeholder='Address'
                                />
                            </div>
                            <div className={styles.billingInfoItem}>
                                <div className={styles.billingInfoTitle}>Town / City</div>
                                <input
                                    className={styles.billingInput}
                                    type='text'
                                    required
                                    placeholder='Town or city'
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.billing}>
                        <div className={styles.billingTitle}>Rental Info</div>
                        <div className='d-flex jcsb'>
                            <div className={styles.billingHeader}>
                                <div className={styles.billingSubtitle}>
                                    Please select your rental date
                                </div>
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
                                <input
                                    className={styles.billingInput}
                                    type='text'
                                    required
                                    placeholder='Select your Location'
                                />
                            </div>
                            <div className={styles.billingInfoItem}>
                                <div className={styles.billingInfoTitle}>Date</div>
                                <input
                                    className={styles.billingInput}
                                    type='text'
                                    required
                                    placeholder='Select your Date'
                                />
                            </div>
                            <div className={styles.billingInfoItem}>
                                <div className={styles.billingInfoTitle}>Time</div>
                                <input
                                    className={styles.billingInput}
                                    type='text'
                                    required
                                    placeholder='Select your Time'
                                />
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
                                    defaultValue='default'>
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
                                />
                            </div>
                            <div className={styles.billingInfoItem}>
                                <div className={styles.billingInfoTitle}>Time</div>
                                <input className={styles.time} type='time' id='time' name='time' />
                            </div>
                        </div>
                    </div>

                    <div className={styles.billing}>
                        <div className={styles.billingTitle}>Payment Method</div>
                        <div className='d-flex jcsb'>
                            <div className={styles.billingHeader}>
                                <div className={styles.billingSubtitle}>
                                    Please enter your payment method
                                </div>
                            </div>
                            <div className={styles.billingStep}>Step 3 of 4</div>
                        </div>
                        <form>
                            <fieldset>
                                <div className={styles.payment}>
                                    <div className='p-24'>
                                        <div className='d-flex jcsb'>
                                            <div className='d-flex aic tac'>
                                                <input type='radio' id='radio' className='mr-8' />
                                                <label htmlFor='radio' className=''>
                                                    Credit Card
                                                </label>
                                            </div>
                                            <div className=''>
                                                <img
                                                    width={48}
                                                    height={16}
                                                    src='./images/visa.png'
                                                    alt='Visa Card'
                                                />
                                                <img
                                                    width={32}
                                                    height={20}
                                                    src='./images/mc.png'
                                                    alt='MasterCard'
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.billingInfo}>
                                            <div className={styles.billingInfoItem}>
                                                <div className={styles.billingInfoTitle}>
                                                    Card Number
                                                </div>
                                                <input
                                                    className={styles.paymentInput}
                                                    type='text'
                                                    required
                                                    placeholder='Card Number'
                                                />
                                            </div>
                                            <div className={styles.billingInfoItem}>
                                                <div className={styles.billingInfoTitle}>
                                                    Expiration Date
                                                </div>
                                                <input
                                                    className={styles.paymentInput}
                                                    type='text'
                                                    required
                                                    placeholder='Expiration Date'
                                                />
                                            </div>
                                            <div className={styles.billingInfoItem}>
                                                <div className={styles.billingInfoTitle}>
                                                    Card Holder
                                                </div>
                                                <input
                                                    className={styles.paymentInput}
                                                    type='text'
                                                    required
                                                    placeholder='Card Holder'
                                                />
                                            </div>
                                            <div className={styles.billingInfoItem}>
                                                <div className={styles.billingInfoTitle}>CVC</div>
                                                <input
                                                    className={styles.paymentInput}
                                                    type='text'
                                                    required
                                                    placeholder='CVC'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.payment}>
                                    <div className='p-24'>
                                        <div className='d-flex jcsb'>
                                            <div className='d-flex aic tac'>
                                                <input type='radio' id='radio-2' className='mr-8' />
                                                <label htmlFor='radio-2' className=''>
                                                    PayPal
                                                </label>
                                            </div>
                                            <div className=''>
                                                <img
                                                    width={100}
                                                    height={24}
                                                    src='./images/paypal.png'
                                                    alt='PayPal'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.payment}>
                                    <div className='p-24'>
                                        <div className='d-flex jcsb'>
                                            <div className='d-flex aic tac'>
                                                <input type='radio' id='radio-3' className='mr-8' />
                                                <label htmlFor='radio-3' className=''>
                                                    Bitcoin
                                                </label>
                                            </div>
                                            <div className=''>
                                                <img
                                                    width={94}
                                                    height={20}
                                                    src='./images/bitcoin.png'
                                                    alt='Bitcoin'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                    <div className={styles.billing}>
                        <div className={styles.billingTitle}>Confirmation</div>
                        <div className='d-flex jcsb'>
                            <div className={styles.billingHeader}>
                                <div className={styles.billingSubtitle}>
                                    We are getting to the end. Just few clicks and your rental is
                                    ready!
                                </div>
                            </div>
                            <div className={styles.billingStep}>Step 4 of 4</div>
                        </div>
                        <div className={styles.billingInfoItem}>
                            <div className={styles.confirmation}>
                                <input type='checkbox' required id='first' />
                                <label htmlFor='first'>
                                    I agree with sending an Marketing and newsletter emails. No
                                    spam, promissed!
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
                            src='./images/safety.png'
                            alt='Your data are safe'
                        />
                        <div className='d-flex flex-col'>
                            <div className={styles.billingTitle}>All your data are safe</div>
                            <div className={styles.billingSubtitle}>
                                We are using the most advanced security to provide you the best
                                experience ever.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Order;
