import React from 'react';
import { Link } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

import Price from './Price';

import styles from './CarCard.module.scss';

function CarCard(
    {
        title,
        price,
        imageUrl,
        gearbox,
        fuelTank,
        body,
        capacity,
        onFavorite,
        discount,
        id,
        favorited = false,
        loading = false,
    },
    props,
) {
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = {
        id,
        parentId: id,
        imageUrl,
        title,
        price,
        gearbox,
        fuelTank,
        capacity,
        body,
        discount,
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={304}
                    height={388}
                    viewBox='0 0 304 388'
                    backgroundColor='#a0b5ff'
                    foregroundColor='#f6f7f9'
                    {...props}>
                    <rect x='0' y='0' rx='10' ry='10' width='116' height='16' />
                    <rect x='0' y='265' rx='10' ry='10' width='68' height='16' />
                    <rect x='110' y='265' rx='10' ry='10' width='68' height='16' />
                    <rect x='220' y='265' rx='10' ry='10' width='68' height='16' />
                    <rect x='0' y='340' rx='10' ry='10' width='116' height='16' />
                    <rect x='0' y='370' rx='10' ry='10' width='99' height='16' />
                    <rect x='185' y='345' rx='10' ry='10' width='116' height='40' />
                    <rect x='0' y='25' rx='10' ry='10' width='88' height='16' />
                    <circle cx='282' cy='15' r='15' />
                </ContentLoader>
            ) : (
                <>
                    <h2 className={styles.title}>
                        <p>{title}</p>
                        {onFavorite && (
                            <button className={styles.favorite} onClick={onClickFavorite}>
                                <img
                                    src={isFavorite ? './images/like.svg' : './images/unlike.svg'}
                                    alt='To Favorite'
                                />
                            </button>
                        )}
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
                        <div className=''>
                            <div className='d-flex aic'>
                                <Price price={price} />
                                <span className='span'>/day</span>
                            </div>
                            {discount && (
                                <div className='d-flex flex-row aic'>
                                    <div className={styles.discount}>${discount}.00</div>
                                </div>
                            )}
                        </div>
                        <Link price={price} to={`/${id}`} className={styles.button}>
                            Rent Now
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default CarCard;
