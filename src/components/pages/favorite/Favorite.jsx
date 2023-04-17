import Header from '../../UI/header/Header';
import Footer from '../../UI/footer/Footer';

import styles from './Favorite.module.scss';

const Favorite = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className={styles.favorite}>
                    <h2 className='mt-46'>Favorite cars</h2>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Favorite;
