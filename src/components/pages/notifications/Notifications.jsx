import Footer from '../../UI/footer/Footer';
import Header from '../../UI/header/Header';

import styles from './Notifications.module.scss';

const Notifications = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className={styles.notifications}>
                    <h2 className='mt-46'>Notifications</h2>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Notifications;
