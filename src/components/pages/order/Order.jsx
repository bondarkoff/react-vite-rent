import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Billing from './Billing.jsx';
import Rental from './Rental.jsx';
import Payment from './Payment.jsx';
import Confirmation from './Confirmation.jsx';
import Summary from './Summary.jsx';

import styles from './Order.module.scss';

const Order = ({ isLoading }) => {
    const { id } = useParams();
    const [car, setCar] = React.useState([null]);
    const obj = { id, parentId: id, imageUrl: car.imageUrl, title: car.title, price: car.price };

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

    const View = ({ car, isLoading }) => {
        return (
            <HelmetProvider>
                <Helmet>
                    <title>{`${car.title} - Order`}</title>
                    <meta name='description' content='Car Details' />
                </Helmet>
                <div className={styles.container}>
                    <div className='d-flex jcsb'>
                        <div className={styles.order}>
                            <form action=''>
                                <fieldset>
                                    <Billing loading={isLoading} />
                                    <Rental loading={isLoading} />
                                    <Payment loading={isLoading} />
                                    <Confirmation loading={isLoading} />
                                </fieldset>
                            </form>
                        </div>
                        <Summary car={car} loading={isLoading} />
                    </div>
                </div>
            </HelmetProvider>
        );
    };

    return (
        <>
            <View car={car} isLoading={isLoading} />
        </>
    );
};

export default Order;
