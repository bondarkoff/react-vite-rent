import React from 'react';
import Header from '../../UI/header/Header';
import MainCarCard from '../../mainCarCard/MainCarCard';
import DestinationSwitch from '../../destinationSwitch/DestinationSwitch';
import CarCard from '../../carCard/CarCard';
import Footer from '../../UI/footer/Footer';

import styles from './Home.module.scss';

const Home = ({ popular, items }) => {
    return (
        <>
            <Header />
            <div className='container'>
                <MainCarCard />
                <DestinationSwitch />
                <div className='mt-46'>
                    <h2 className={styles.title}>Popular Car</h2>
                    <div className={styles.carCards}>
                        {popular.map(item => (
                            <CarCard
                                title={item.title}
                                key={item.id}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                capacity={item.capacity}
                                body={item.body}
                                fuelTank={item.fuelTank}
                                gearbox={item.gearbox}
                            />
                        ))}
                    </div>
                    <h2 className={styles.title}>Recommendation Car</h2>
                    <div className={styles.carCards}>
                        {items.map(item => (
                            <CarCard
                                title={item.title}
                                key={item.id}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                capacity={item.capacity}
                                body={item.body}
                                fuelTank={item.fuelTank}
                                gearbox={item.gearbox}
                            />
                        ))}
                    </div>
                    <div className={styles.more}>
                        <div></div>
                        <button className={styles.button}>Show more car</button>
                        <div className={styles.count}>{items.length} Car</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
