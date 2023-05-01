import ContentLoader from 'react-content-loader';
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

const Billing = ({ loading = false, props }) => {
    return (
        <div className='d-flex jcsb'>
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
                        <rect x='0' y='100' rx='10' ry='10' width='116' height='25' />
                        <rect x='0' y='135' rx='10' ry='10' width='386' height='56' />
                        <rect x='0' y='215' rx='10' ry='10' width='116' height='25' />
                        <rect x='0' y='250' rx='10' ry='10' width='386' height='56' />
                        <rect x='434' y='100' rx='10' ry='10' width='116' height='25' />
                        <rect x='431' y='135' rx='10' ry='10' width='386' height='56' />
                        <rect x='432' y='215' rx='10' ry='10' width='116' height='25' />
                        <rect x='430' y='250' rx='10' ry='10' width='386' height='56' />
                    </ContentLoader>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </div>
    );
};

export default Billing;
