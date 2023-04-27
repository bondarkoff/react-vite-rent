import React from 'react';
import AppContext from '../../../context';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import styles from './Favorite.module.scss';
import CarCard from '../../carCard/CarCard';

const Favorite = () => {
    const { favorite, onAddToFavorite } = React.useContext(AppContext);

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Favorite Cars</title>
                    <meta name='description' content='Favorite Cars' />
                </Helmet>
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
            </HelmetProvider>
        </>
    );
};

export default Favorite;
