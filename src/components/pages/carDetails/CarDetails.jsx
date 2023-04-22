import Header from '../../UI/header/Header';
import Footer from '../../UI/footer/Footer';

import styles from './CarDetails.module.scss';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
    const { id } = useParams();
    return (
        <>
            <Header />
            <div className='container'>
                <div className={styles.carDetails}>
                    <h2 className='mt-46'>CarDetails page</h2>
                    <p>id: {id}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CarDetails;
