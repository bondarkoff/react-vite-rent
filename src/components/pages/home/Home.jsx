import React from 'react';
import ContentLoader from 'react-content-loader';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import MainCarCard from '../../mainCarCard/MainCarCard';
import CarCard from '../../carCard/CarCard';

import styles from './Home.module.scss';

const Home = ({ items, onAddToFavorite, searchValue, isLoading, loading = false }, props) => {
    const [displayedItems, setDisplayedItems] = React.useState(8);
    const [allItemsLoaded, setAllItemsLoaded] = React.useState(false);

    const showMore = () => {
        if (displayedItems >= items.length) {
            setAllItemsLoaded(true);
            return;
        }
        setDisplayedItems(displayedItems + 8);
    };

    const renderItems = () => {
        const filterItems = items.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return filterItems
            .slice(0, displayedItems)
            .map(item => (
                <CarCard
                    title={item.title}
                    key={item.id}
                    id={item.id}
                    parentId={item.parentId}
                    price={item.price}
                    discount={item.discount}
                    imageUrl={item.imageUrl}
                    capacity={item.capacity}
                    body={item.body}
                    fuelTank={item.fuelTank}
                    gearbox={item.gearbox}
                    onFavorite={obj => onAddToFavorite(obj)}
                    loading={isLoading}
                />
            ));
    };

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Morent - Car Rental</title>
                    <meta name='description' content='Car Rental' />
                </Helmet>
                <div className='container'>
                    {searchValue ? null : <MainCarCard loading={isLoading} />}
                    <div className='mt-46'>
                        <h2 className={styles.title}>
                            {searchValue ? `Search by request: "${searchValue}"` : 'All cars'}
                        </h2>
                        <div className={styles.carCards}>{renderItems()}</div>
                        <div className={styles.more}>
                            {loading ? (
                                <div className='d-flex aic jcc'>
                                    {' '}
                                    <ContentLoader
                                        speed={2}
                                        width={116}
                                        height={40}
                                        viewBox='0 0 116 40'
                                        backgroundColor='#a0b5ff'
                                        foregroundColor='#f6f7f9'
                                        {...props}>
                                        <rect x='0' y='0' rx='10' ry='10' width='116' height='40' />
                                    </ContentLoader>
                                </div>
                            ) : (
                                <button
                                    onClick={showMore}
                                    className={styles.button}
                                    disabled={allItemsLoaded}>
                                    Show more car
                                </button>
                            )}
                            {loading ? (
                                <div className={styles.count}>So many cars...</div>
                            ) : (
                                <div className={styles.count}>{items.length} Car</div>
                            )}
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        </>
    );
};

export default Home;
