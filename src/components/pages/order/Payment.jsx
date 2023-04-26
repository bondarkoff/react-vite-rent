import styles from './Order.module.scss';

function formatCardNumber(event) {
    const input = event.target;
    const trimmed = input.value.replace(/\s+/g, '');
    const regex = /^[0-9]{1,16}$/;
    if (regex.test(trimmed)) {
        const parts = trimmed.match(/[\s\S]{1,4}/g) || [];
        const formatted = parts.join('  ');
        input.value = formatted;
    } else {
        input.value = input.value.slice(0, -1);
    }
}

function formatExpirationDate(event) {
    const input = event.target;
    const trimmed = input.value.replace(/[^0-9]/g, '');
    const month = trimmed.slice(0, 2);
    const year = trimmed.slice(2, 4);
    let formatted = '';
    if (month) {
        formatted += `${month}`;
        if (month.length === 2 && year) {
            formatted += `/${year}`;
        }
    }
    input.value = formatted;
}

function formatCVC(event) {
    const input = event.target;
    const trimmed = input.value.replace(/\s+/g, '');
    const regex = /^[0-9]{1,3}$/;
    if (regex.test(trimmed)) {
        input.value = trimmed;
    } else {
        input.value = input.value.slice(0, -1);
    }
}

const Payment = () => {
    return (
        <div className={styles.billing}>
            <div className={styles.billingTitle}>Payment Method</div>
            <div className='d-flex jcsb'>
                <div className={styles.billingHeader}>
                    <div className={styles.billingSubtitle}>Please enter your payment method</div>
                </div>
                <div className={styles.billingStep}>Step 3 of 4</div>
            </div>
            <div className={styles.payment}>
                <div className='p-24'>
                    <div className='d-flex jcsb'>
                        <div className='d-flex aic tac'>
                            <input
                                type='radio'
                                id='radio-1'
                                name='payment-method'
                                defaultChecked
                                className='mr-8'
                            />
                            <label htmlFor='radio-1'>Credit Card</label>
                        </div>
                        <div className=''>
                            <img width={48} height={16} src='/images/visa.png' alt='Visa Card' />
                            <img width={32} height={20} src='/images/mc.png' alt='MasterCard' />
                        </div>
                    </div>
                    <div className={styles.billingInfo}>
                        <div className={styles.billingInfoItem}>
                            <div className={styles.billingInfoTitle}>Card Number</div>
                            <input
                                className={styles.paymentInput}
                                type='tel'
                                inputMode='numeric'
                                autoComplete='cc-number'
                                maxLength='23'
                                required
                                placeholder='Card Number'
                                onInput={formatCardNumber}
                            />
                        </div>
                        <div className={styles.billingInfoItem}>
                            <div className={styles.billingInfoTitle}>Expiration Date</div>
                            <input
                                className={styles.paymentInput}
                                type='text'
                                inputMode='numeric'
                                autoComplete='cc-exp'
                                maxLength='5'
                                required
                                placeholder='Expiration Date'
                                onInput={formatExpirationDate}
                            />
                        </div>
                        <div className={styles.billingInfoItem}>
                            <div className={styles.billingInfoTitle}>Card Holder</div>
                            <input
                                className={styles.paymentInput}
                                type='name'
                                required
                                placeholder='Card Holder'
                                maxLength='50'
                            />
                        </div>
                        <div className={styles.billingInfoItem}>
                            <div className={styles.billingInfoTitle}>CVC</div>
                            <input
                                className={styles.paymentInput}
                                type='number'
                                inputMode='numeric'
                                autoComplete='cc-csc'
                                maxLength='3'
                                required
                                placeholder='CVC'
                                onInput={formatCVC}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.payment}>
                <div className='p-24'>
                    <div className='d-flex jcsb'>
                        <div className='d-flex aic tac'>
                            <input
                                type='radio'
                                id='radio-2'
                                name='payment-method'
                                className='mr-8'
                            />
                            <label htmlFor='radio-2'>PayPal</label>
                        </div>
                        <div className=''>
                            <img width={100} height={24} src='/images/paypal.png' alt='PayPal' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.payment}>
                <div className='p-24'>
                    <div className='d-flex jcsb'>
                        <div className='d-flex aic tac'>
                            <input
                                type='radio'
                                id='radio-3'
                                name='payment-method'
                                className='mr-8'
                            />
                            <label htmlFor='radio-3'>Bitcoin</label>
                        </div>
                        <div className=''>
                            <img width={94} height={20} src='/images/bitcoin.png' alt='Bitcoin' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
