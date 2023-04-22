import React from 'react';
import styles from './Reviews.module.scss';

import { reviews } from './Reviews.data';
import Stars from './Stars';

const Reviews = ({ stars }) => {
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
            <div className={styles.reviewsWrapper}>
                <div className={styles.reviewsTitle}>Reviews</div>
                <div className={styles.reviewsCount}>{reviews.length}</div>
            </div>
            <div className='pt-8'>
                {reviews.slice(0, displayedItems).map(review => (
                    <div key={review.id} className='mt-24'>
                        <div className='d-flex jcsb'>
                            <div className='d-flex'>
                                <img width={56} height={56} src={review.image} className='mr-16' />
                                <div className={styles.itemBio}>
                                    <div className={styles.itemTitle}>{review.name}</div>
                                    <div className={styles.itemJob}>{review.job}</div>
                                </div>
                            </div>
                            <div className='stars'>
                                <div>
                                    <Stars rating={review.rating} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemComment}>{review.comment}</div>
                    </div>
                ))}
            </div>
            <button disabled={allItemsLoaded} onClick={showMore} className={styles.showMore}>
                Show More <img src='./images/grey-down.svg' alt='Show More' className='ml-10' />
            </button>
        </div>
    );
};

export default Reviews;
