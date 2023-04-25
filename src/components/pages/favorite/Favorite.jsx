import React from 'react';
import AppContext from '../../../context';

import styles from './Favorite.module.scss';
import CarCard from '../../carCard/CarCard';

const Favorite = () => {
    const { favorite, onAddToFavorite } = React.useContext(AppContext);

    return (
        <>
            <div className='container'>
                <div className={styles.favorite}>
                    <h2 className='mt-46'>Favorite Cars</h2>
                    <div className={styles.favoriteCard}>
                        {favorite.length <= 0 ? (
                            <div>You don't have favorite cars, add some..</div>
                        ) : (
                            favorite.map((item, index) => (
                                <CarCard
                                    key={index}
                                    favorited={true}
                                    onFavorite={onAddToFavorite}
                                    {...item}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Favorite;
