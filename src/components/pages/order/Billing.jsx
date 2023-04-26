import styles from './Order.module.scss';

function formatPhoneNumber(event) {
    const input = event.target;
    const trimmed = input.value.replace(/-/g, '').replace(/\s+/g, '');
    const regex = /^[0-9]{0,12}$/;
    if (regex.test(trimmed)) {
        const parts = trimmed.match(/[\s\S]{1,4}/g) || [];
        const formatted = parts.join('-');
        input.value = formatted;
    } else {
        input.value = input.value.slice(0, -1);
    }
}

const Billing = () => {
    return (
        <div className='d-flex jcsb'>
            <div className={styles.billing}>
                <div className={styles.billingTitle}>Billing Info</div>
                <div className='d-flex jcsb'>
                    <div className={styles.billingHeader}>
                        <div className={styles.billingSubtitle}>Please enter your billing info</div>
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
                            type='tel'
                            inputMode='tel'
                            autoComplete='tel'
                            maxLength='12'
                            required
                            placeholder='Phone number'
                            onInput={formatPhoneNumber}
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
        </div>
    );
};

export default Billing;
