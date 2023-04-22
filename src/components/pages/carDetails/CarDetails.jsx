import React, { useEffect } from 'react';
import axios from 'axios';
import Header from '../../UI/header/Header';
import Footer from '../../UI/footer/Footer';

import styles from './CarDetails.module.scss';
import { Link, useParams } from 'react-router-dom';
import Price from '../../carCard/Price';
import Reviews from './reviews/Reviews';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = React.useState([null]);

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
        const { title, price, imageUrl, capacity, body, fuelTank, gearbox } = car;
        return (
            <div className='container'>
                <div className={styles.carDetails}>
                    <div className='d-flex flex-row jcc mt-32'>
                        <div className={styles.left}>
                            <div className={styles.leftTitle}>
                                Sports car with the best design and acceleration
                            </div>
                            <div className={styles.leftSubtitle}>
                                Safety and comfort while driving a futuristic and elegant sports car
                            </div>
                            <img className={styles.image} src={imageUrl} alt={title} />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.title}>{title}</div>
                            <div className=''>rating</div>
                            <div className={styles.descr}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                                ratione sapiente est pariatur placeat. Eaque porro corporis, iusto
                                aliquid reiciendis libero harum eum asperiores velit necessitatibus
                                optio dignissimos autem ut.
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.featureItem}>
                                    Type Car <span>{body}</span>
                                </div>
                                <div className={styles.featureItem}>
                                    Capacity <span>{capacity}</span>
                                </div>
                                <div className={styles.featureItem}>
                                    Gearbox <span>{gearbox}</span>
                                </div>
                                <div className={styles.featureItem}>
                                    Fuel Tank <span>{fuelTank}</span>
                                </div>
                            </div>
                            <div className={styles.detailsBottom}>
                                <Price price={price} />
                                <Link to='/' className={styles.button}>
                                    Rent Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Reviews />
            </div>
        );
    };

    return (
        <>
            <Header />
            <View car={car} />
            <Footer />
        </>
    );
};

export default CarDetails;
