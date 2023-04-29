import React from 'react';
import styles from './Reviews.module.scss';
import ContentLoader from 'react-content-loader';

import { reviews } from './Reviews.data';
import Stars from './Stars';

const Reviews = ({ loading = false, props }) => {
    const [displayedItems, setDisplayedItems] = React.useState(2);
    const [allItemsLoaded, setAllItemsLoaded] = React.useState(false);

    const showMore = () => {
        if (displayedItems >= reviews.length) {
            setAllItemsLoaded(true);
            return;
        }
        setDisplayedItems(displayedItems + 2);
    };

    return (
        <div className={styles.reviews}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={116}
                    height={20}
                    viewBox='0 0 116 20'
                    backgroundColor='#a0b5ff'
                    foregroundColor='#f6f7f9'
                    {...props}>
                    <rect x='0' y='0' rx='10' ry='10' width='77' height='16' />
                    <circle cx='99' cy='7' r='7' />
                </ContentLoader>
            ) : (
                <div className={styles.reviewsWrapper}>
                    <div className={styles.reviewsTitle}>Reviews</div>
                    <div className={styles.reviewsCount}>{reviews.length}</div>
                </div>
            )}
            <div className='pt-8'>
                {reviews.slice(0, displayedItems).map(review => (
                    <div key={review.id} className='mt-24'>
                        <div className='d-flex jcsb'>
                            {loading ? (
                                <div className='ml-25'>
                                    <ContentLoader
                                        speed={2}
                                        width={176}
                                        height={44}
                                        viewBox='0 0 176 44'
                                        backgroundColor='#a0b5ff'
                                        foregroundColor='#f6f7f9'
                                        {...props}>
                                        <rect x='40' y='0' rx='10' ry='10' width='77' height='12' />
                                        <circle cx='17' cy='17' r='17' />
                                        <rect
                                            x='40'
                                            y='20'
                                            rx='10'
                                            ry='10'
                                            width='66'
                                            height='12'
                                        />
                                    </ContentLoader>
                                </div>
                            ) : (
                                <div className='d-flex'>
                                    <img
                                        width={56}
                                        height={56}
                                        src={review.image}
                                        className='mr-16'
                                    />
                                    <div className={styles.itemBio}>
                                        <div className={styles.itemTitle}>{review.name}</div>
                                        <div className={styles.itemJob}>{review.job}</div>
                                    </div>
                                </div>
                            )}
                            {loading ? (
                                <div className='ml-50'>
                                    <ContentLoader
                                        speed={2}
                                        width={110}
                                        height={20}
                                        viewBox='0 0 110 20'
                                        backgroundColor='#a0b5ff'
                                        foregroundColor='#f6f7f9'
                                        {...props}>
                                        <rect x='0' y='0' rx='10' ry='10' width='110' height='12' />
                                    </ContentLoader>
                                </div>
                            ) : (
                                <div className='stars'>
                                    <div>
                                        <Stars rating={review.rating} />
                                    </div>
                                </div>
                            )}
                        </div>
                        {loading ? (
                            <div className='ml-50 mt-15 pl-20'>
                                {' '}
                                <ContentLoader
                                    speed={2}
                                    width={1000}
                                    height={60}
                                    viewBox='0 0 1000 60'
                                    backgroundColor='#a0b5ff'
                                    foregroundColor='#f6f7f9'
                                    {...props}>
                                    <rect x='0' y='0' rx='10' ry='10' width='1000' height='60' />
                                </ContentLoader>
                            </div>
                        ) : (
                            <div className={styles.itemComment}>{review.comment}</div>
                        )}
                    </div>
                ))}
            </div>
            <button disabled={allItemsLoaded} onClick={showMore} className={styles.showMore}>
                Show More <img src='/images/grey-down.svg' alt='Show More' className='ml-10' />
            </button>
        </div>
    );
};

export default Reviews;
