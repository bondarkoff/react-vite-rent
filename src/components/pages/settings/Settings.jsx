import Header from '../../UI/header/Header';
import Footer from '../../UI/footer/Footer';

import styles from './Settings.module.scss';

const Settings = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className={styles.settings}>
                    <h2 className='mt-46'>Settings page</h2>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Settings;
