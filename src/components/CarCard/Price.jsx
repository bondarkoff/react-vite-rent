import React from 'react';
import styles from './CarCard.module.scss';

const Price = ({ price }) => {
    return (
        <p className={styles.price}>
            {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(price)}
        </p>
    );
};

export default React.memo(Price);
