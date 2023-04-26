import React from 'react';
import ContentLoader from 'react-content-loader';

import Header from '../../UI/header/Header';
import MainCarCard from '../../mainCarCard/MainCarCard';
import CarCard from '../../carCard/CarCard';
import Footer from '../../UI/footer/Footer';

import styles from './Home.module.scss';

const Home = (
    {
        items,
        onAddToFavorite,
        onChangeSearchInput,
        searchValue,
        setSearchValue,
        handleButtonClick,
        isLoading,
        loading = false,
    },
    props,
) => {
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
        </>
    );
};

export default Home;
