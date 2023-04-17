import Header from '../../UI/header/Header';
import Footer from '../../UI/footer/Footer';

import styles from './Profile.module.scss';

const Profile = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className={styles.profile}>
                    <h2 className='mt-46'>Profile page</h2>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;
