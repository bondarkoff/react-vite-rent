import React from 'react';
import Price from './Price';

import styles from './CarCard.module.scss';
import { Link } from 'react-router-dom';

function CarCard({ title, price, imageUrl, gearbox, fuelTank, body, capacity }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>
                <p>{title}</p>
                <button className={styles.favorite}>
                    <img src='./images/unlike.svg' alt='To Favorite' />
                </button>
            </h2>
            <div className={styles.body}>{body}</div>
            <div className='d-flex aic jcc pos-r'>
                <img className='mt-50' src={imageUrl} alt='Car' />
                <div className={styles.blur}></div>
            </div>
            <div className='d-flex jcsb aic mt-50'>
                <div className='d-flex aic jcc tac'>
                    <img
                        className='mr-6'
                        width={24}
                        height={24}
                        src='./images/gas-station.svg'
                        alt='FuelTank'
                    />
                    <p className={styles.carDetails}>{fuelTank}L</p>
                </div>
                <div className='d-flex aic jcc tac'>
                    <img
                        className='mr-6'
                        width={24}
                        height={24}
                        src='./images/car.svg'
                        alt='GearBox'
                    />
                    <p className={styles.carDetails}>{gearbox}</p>
                </div>
                <div className='d-flex aic jcc tac'>
                    <img
                        className='mr-6'
                        width={24}
                        height={24}
                        src='./images/people.svg'
                        alt='Capacity'
                    />
                    <p className={styles.carDetails}>{capacity} People</p>
                </div>
            </div>
            <div className='d-flex flex-row aic jcsb mt-20'>
                <Price price={price}>/day</Price>
                <Link to={`${title}`} className={styles.button}>
                    Rent Now
                </Link>
            </div>
        </div>
    );
}

export default CarCard;
