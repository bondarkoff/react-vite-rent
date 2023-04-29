import ContentLoader from 'react-content-loader';

import Stars from '../CarDetails/Reviews/Stars';
import Price from '../../carCard/Price';
import { reviews } from '../CarDetails/Reviews/Reviews.data';

import styles from './Order.module.scss';
import { Link } from 'react-router-dom';

const Summary = ({ car, loading = false, props }) => {
    const { imageUrl, price } = car;

    const avgRating = Math.round(
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
    );

    return (
        <div className={styles.summary}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={330}
                    height={235}
                    viewBox='0 0 330 235'
                    backgroundColor='#a0b5ff'
                    foregroundColor='#f6f7f9'
                    {...props}>
                    <rect x='0' y='0' rx='10' ry='10' width='116' height='16' />
                    <rect x='0' y='20' rx='10' ry='10' width='95' height='16' />
                    <rect x='0' y='113' rx='11' ry='11' width='145' height='118' />
                    <rect x='163' y='121' rx='10' ry='10' width='150' height='16' />
                    <rect x='163' y='141' rx='10' ry='10' width='100' height='16' />
                    <rect x='163' y='180' rx='10' ry='10' width='90' height='16' />
                </ContentLoader>
            ) : (
                <>
                    <div className={styles.summaryTitle}>Rental Summary</div>
                    <div className={styles.summarySubtitle}>
                        Prices may change depending on the length of the rental and the price of
                        your rental car.
                    </div>
                    <div className='d-flex aic'>
                        <Link to={`/${car.id}`}>
                            <div className={styles.summaryImg}>
                                <img width={116} height={36} src={imageUrl} alt='Your Car' />
                            </div>
                        </Link>
                        <div className='d-flex flex-col'>
                            <Link to={`/${car.id}`}>
                                <div className={styles.carTitle}>{car.title}</div>
                            </Link>
                            <div className='d-flex flex-row aic tac '>
                                <Stars className rating={avgRating} />
                                <p className='ml-8'>{reviews.length} Reviewer</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className={styles.divider}></div>
            {loading ? (
                <div className='mt-25'>
                    <ContentLoader
                        speed={2}
                        width={444}
                        height={230}
                        viewBox='0 0 444 230'
                        backgroundColor='#a0b5ff'
                        foregroundColor='#f6f7f9'
                        {...props}>
                        <rect x='0' y='0' rx='10' ry='10' width='75' height='12' />
                        <rect x='0' y='30' rx='10' ry='10' width='75' height='12' />
                        <rect x='370' y='0' rx='10' ry='10' width='75' height='12' />
                        <rect x='370' y='30' rx='10' ry='10' width='75' height='12' />
                        <rect x='0' y='94' rx='10' ry='10' width='439' height='90' />
                        <rect x='0' y='199' rx='10' ry='10' width='75' height='12' />
                        <rect x='0' y='217' rx='10' ry='10' width='75' height='12' />
                        <rect x='370' y='196' rx='10' ry='10' width='75' height='33' />
                    </ContentLoader>
                </div>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
};

export default Summary;
