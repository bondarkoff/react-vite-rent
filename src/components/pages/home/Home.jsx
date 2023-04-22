import React from 'react';
import Header from '../../UI/header/Header';
import MainCarCard from '../../mainCarCard/MainCarCard';
import DestinationSwitch from '../../destinationSwitch/DestinationSwitch';
import CarCard from '../../carCard/CarCard';
import Footer from '../../UI/footer/Footer';

import styles from './Home.module.scss';

const Home = ({
    items,
    onAddToFavorite,
    onChangeSearchInput,
    searchValue,
    setSearchValue,
    handleButtonClick,
}) => {
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
                    imageUrl={item.imageUrl}
                    capacity={item.capacity}
                    body={item.body}
                    fuelTank={item.fuelTank}
                    gearbox={item.gearbox}
                    onFavorite={obj => onAddToFavorite(obj)}
                />
            ));
    };

    return (
        <>
            <Header
                onChangeSearchInput={onChangeSearchInput}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleButtonClick={handleButtonClick}
            />
            <div className='container'>
                {searchValue ? null : (
                    <>
                        <MainCarCard />
                        <DestinationSwitch />
                    </>
                )}
                <div className='mt-46'>
                    <h2 className={styles.title}>
                        {searchValue ? `Search by request: "${searchValue}"` : 'All cars'}
                    </h2>
                    <div className={styles.carCards}>{renderItems()}</div>
                    <div className={styles.more}>
                        <div></div>
                        <button
                            onClick={showMore}
                            className={styles.button}
                            disabled={allItemsLoaded}>
                            Show more car
                        </button>
                        <div className={styles.count}>{items.length} Car</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
