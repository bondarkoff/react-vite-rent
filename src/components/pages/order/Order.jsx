import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Price from '../../carCard/Price.jsx';

import styles from './Order.module.scss';
import Stars from '../carDetails/reviews/Stars';
import { reviews } from '../carDetails/reviews/Reviews.data';
import Billing from './Billing.jsx';
import Rental from './Rental.jsx';
import Payment from './Payment.jsx';
import Confirmation from './Confirmation.jsx';

const Order = () => {
    const { id } = useParams();
    const [car, setCar] = React.useState([null]);
    const obj = { id, parentId: id, imageUrl: car.imageUrl, title: car.title, price: car.price };

    const avgRating = Math.round(
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
    );

    useEffect(() => {
        async function fetchData() {
            try {
                const [carResponse] = await Promise.all([
                    axios.get(`https://643a8ef1bd3623f1b9b619da.mockapi.io/items/${id}`),
                ]);
                setCar(carResponse.data);
            } catch (error) {
                alert('Error while loading data');
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const View = ({ car }) => {
        const { title, imageUrl, price } = car;
        return (
            <div className={styles.container}>
                <div className='d-flex jcsb'>
                    <div className={styles.order}>
                        <form action=''>
                            <fieldset>
                                <Billing />
                                <Rental />
                                <Payment />
                                <Confirmation />
                            </fieldset>
                        </form>
                    </div>
                    <div className={styles.summary}>
                        <div className={styles.summaryTitle}>Rental Summary</div>
                        <div className={styles.summarySubtitle}>
                            Prices may change depending on the length of the rental and the price of
                            your rental car.
                        </div>
                        <div className='d-flex aic'>
                            <div className={styles.summaryImg}>
                                <img width={116} height={36} src={imageUrl} alt='Your Car' />
                            </div>
                            <div className='d-flex flex-col'>
                                <div className={styles.carTitle}>{car.title}</div>
                                <div className='d-flex flex-row aic tac '>
                                    <Stars className rating={avgRating} />
                                    <p className='ml-8'>{reviews.length} Reviewer</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.divider}></div>
                        <div className='d-flex jcsb aic mt-32'>
                            <div className={styles.subtotal}>Subtotal</div>
                            <Price price={car.price} />
                        </div>
                        <div className='d-flex jcsb aic mt-24'>
                            <div className={styles.tax}>Tax</div>
                            <div className={styles.price}>0$</div>
                        </div>
                        <div className=''>
                            <div className={styles.promocode}>
                                <input
                                    className={styles.promocodeTitle}
                                    type='text'
                                    placeholder='Apply Promocode'
                                />
                                <button className={styles.promocodeButton}>Apply now</button>
                            </div>
                        </div>
                        <div className='mt-32 d-flex jcsb aic'>
                            <div className=''>
                                <div className={styles.totalTitle}>Total Rental Price</div>
                                <div className={styles.totalSubtitle}>
                                    Overall price and includes rental discount
                                </div>
                            </div>
                            <Price price={price} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <View car={car} />
        </>
    );
};

export default Order;
