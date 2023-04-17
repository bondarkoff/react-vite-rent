import Header from '../../UI/header/Header';
import Footer from '../../UI/footer/Footer';

import styles from './CarDetails.module.scss';

const CarDetails = ({ items }) => {
    return (
        <>
            <Header />
            <div className={styles.carDetails}>CarDetails</div>
            <Footer />
        </>
    );
};

export default CarDetails;
