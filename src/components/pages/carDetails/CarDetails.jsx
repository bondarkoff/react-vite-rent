import Header from '../../UI/header/Header';
import Footer from '../../UI/footer/Footer';

import styles from './CarDetails.module.scss';

const CarDetails = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className={styles.carDetails}>
                    <h2 className='mt-46'>CarDetails page</h2>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CarDetails;
