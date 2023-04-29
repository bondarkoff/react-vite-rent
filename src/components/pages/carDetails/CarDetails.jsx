import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ContentLoader from 'react-content-loader';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Price from '../../carCard/Price';
import Reviews from './reviews/Reviews';
import Stars from './reviews/Stars';
import { reviews } from './reviews/Reviews.data';

import styles from './CarDetails.module.scss';
import AppContext from '../../../context';

const CarDetails = ({ onFavorite, isLoading, favorited = false }) => {
    const { id } = useParams();
    const [car, setCar] = React.useState([null]);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const { favorite } = React.useContext(AppContext);
    const obj = {
        id,
        parentId: id,
        imageUrl: car.imageUrl,
        title: car.title,
        price: car.price,
        discount: car.discount,
    };

    const avgRating = Math.round(
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
    );

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

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

    const View = ({ car, loading = false, props }) => {
        const { title, price, imageUrl, capacity, body, fuelTank, gearbox, discount, parentId } =
            car;
        return (
            <HelmetProvider>
                <Helmet>
                    <title>{title}</title>
                    <meta name='description' content='Car Details' />
                </Helmet>
                <div className='container'>
                    <div className={styles.carDetails}>
                        <div className='d-flex flex-row jcc mt-32'>
                            {loading ? (
                                <div className='mr-24'>
                                    <ContentLoader
                                        speed={2}
                                        width={492}
                                        height={550}
                                        viewBox='0 0 492 550'
                                        backgroundColor='#a0b5ff'
                                        foregroundColor='#f6f7f9'
                                        {...props}>
                                        <rect
                                            x='0'
                                            y='0'
                                            rx='10'
                                            ry='10'
                                            width='492'
                                            height='550'
                                        />
                                    </ContentLoader>
                                </div>
                            ) : (
                                <div className={styles.left}>
                                    <div className={styles.leftTitle}>
                                        Cars with the best design and acceleration
                                    </div>
                                    <div className={styles.leftSubtitle}>
                                        Safety and comfort while driving a futuristic and elegant
                                        cars
                                    </div>
                                    <img className={styles.image} src={imageUrl} alt={title} />
                                </div>
                            )}
                            <div className={styles.right}>
                                {loading ? (
                                    <ContentLoader
                                        speed={2}
                                        width={500}
                                        height={40}
                                        viewBox='0 0 500 40'
                                        backgroundColor='#a0b5ff'
                                        foregroundColor='#f6f7f9'
                                        {...props}>
                                        <rect x='0' y='0' rx='10' ry='10' width='116' height='16' />
                                        <rect x='0' y='20' rx='10' ry='10' width='85' height='16' />
                                        <circle cx='480' cy='16' r='10' />
                                    </ContentLoader>
                                ) : (
                                    <>
                                        <div className='d-flex jcsb aic'>
                                            <div className={styles.title}>{title}</div>
                                            {onFavorite && (
                                                <button
                                                    className={styles.favorite}
                                                    onClick={onClickFavorite}>
                                                    <img
                                                        src={
                                                            favorite.find(
                                                                obj => obj.parentId === id,
                                                            )
                                                                ? '/images/like.svg'
                                                                : '/images/unlike.svg'
                                                        }
                                                        width={24}
                                                        height={24}
                                                        alt='To Favorite'
                                                    />
                                                </button>
                                            )}
                                        </div>
                                        <div className='d-flex flex-row aic tac '>
                                            <Stars className rating={avgRating} />
                                            <p className='ml-8'>{reviews.length} Reviewer</p>
                                        </div>
                                    </>
                                )}

                                {loading ? (
                                    <div className='mt-50 pb-50 pt-50'>
                                        <ContentLoader
                                            speed={2}
                                            width={500}
                                            height={80}
                                            viewBox='0 0 500 80'
                                            backgroundColor='#a0b5ff'
                                            foregroundColor='#f6f7f9'
                                            {...props}>
                                            <rect
                                                x='0'
                                                y='0'
                                                rx='10'
                                                ry='10'
                                                width='500'
                                                height='14'
                                            />
                                            <rect
                                                x='0'
                                                y='20'
                                                rx='10'
                                                ry='10'
                                                width='500'
                                                height='14'
                                            />
                                            <rect
                                                x='0'
                                                y='40'
                                                rx='10'
                                                ry='10'
                                                width='500'
                                                height='14'
                                            />
                                            <rect
                                                x='0'
                                                y='60'
                                                rx='10'
                                                ry='10'
                                                width='500'
                                                height='14'
                                            />
                                        </ContentLoader>
                                    </div>
                                ) : (
                                    <div className={styles.descr}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Itaque ratione sapiente est pariatur placeat. Eaque porro
                                        corporis, iusto aliquid reiciendis libero harum eum
                                        asperiores velit necessitatibus optio dignissimos autem ut.
                                    </div>
                                )}
                                {loading ? (
                                    <div className='mt-50 mb-50'>
                                        <ContentLoader
                                            speed={2}
                                            width={500}
                                            height={46}
                                            viewBox='0 0 500 46'
                                            backgroundColor='#a0b5ff'
                                            foregroundColor='#f6f7f9'
                                            {...props}>
                                            <rect
                                                x='0'
                                                y='0'
                                                rx='10'
                                                ry='10'
                                                width='90'
                                                height='12'
                                            />
                                            <rect
                                                x='0'
                                                y='30'
                                                rx='10'
                                                ry='10'
                                                width='90'
                                                height='12'
                                            />
                                            <rect
                                                x='410'
                                                y='0'
                                                rx='10'
                                                ry='10'
                                                width='90'
                                                height='12'
                                            />
                                            <rect
                                                x='410'
                                                y='30'
                                                rx='10'
                                                ry='10'
                                                width='90'
                                                height='12'
                                            />
                                        </ContentLoader>
                                    </div>
                                ) : (
                                    <div className={styles.feature}>
                                        <div className={styles.featureItem}>
                                            Type Car <span>{body}</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            Capacity <span>{capacity} Person</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            Gearbox <span>{gearbox}</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            Fuel Tank <span>{fuelTank}</span>
                                        </div>
                                    </div>
                                )}
                                {loading ? (
                                    <ContentLoader
                                        speed={2}
                                        width={500}
                                        height={40}
                                        viewBox='0 0 500 40'
                                        backgroundColor='#a0b5ff'
                                        foregroundColor='#f6f7f9'
                                        {...props}>
                                        <rect x='0' y='0' rx='10' ry='10' width='90' height='12' />
                                        <rect x='0' y='20' rx='10' ry='10' width='90' height='12' />
                                        <rect
                                            x='410'
                                            y='0'
                                            rx='10'
                                            ry='10'
                                            width='90'
                                            height='40'
                                        />
                                    </ContentLoader>
                                ) : (
                                    <div className={styles.detailsBottom}>
                                        <div className=''>
                                            <div className='d-flex aic'>
                                                <Price price={price} />

                                                <span className='span'>/day</span>
                                            </div>
                                            {discount && (
                                                <div className='d-flex flex-row aic'>
                                                    <div className={styles.discount}>
                                                        ${discount}.00
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <Link
                                            to={`/cars/${parentId}/order`}
                                            className={styles.button}>
                                            Rent Now
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <Reviews rating={avgRating} loading={isLoading} />
                </div>
            </HelmetProvider>
        );
    };

    return (
        <>
            <View car={car} loading={isLoading} />
        </>
    );
};

export default CarDetails;
