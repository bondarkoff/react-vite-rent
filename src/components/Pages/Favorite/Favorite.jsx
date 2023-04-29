import React from 'react';
import AppContext from '../../context';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import styles from './Favorite.module.scss';
import CarCard from '../../carCard/CarCard';

const Favorite = ({ searchValue, favorited = true }) => {
    const { favorite, onAddToFavorite } = React.useContext(AppContext);

    const renderItems = () => {
        const filteredItems = favorite.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return filteredItems.map((item, index) => (
            <CarCard key={index} favorited={favorited} onFavorite={onAddToFavorite} {...item} />
        ));
    };

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
                                renderItems()
                            )}
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        </>
    );
};

export default Favorite;
