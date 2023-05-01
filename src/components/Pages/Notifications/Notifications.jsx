import { Helmet, HelmetProvider } from 'react-helmet-async';

import styles from './Notifications.module.scss';

const Notifications = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Notifications page</title>
                    <meta name='description' content='Notifications page' />
                </Helmet>
                <div className='container'>
                    <div className={styles.notifications}>
                        <h2 className='mt-46'>Notifications</h2>
                    </div>
                </div>
            </HelmetProvider>
        </>
    );
};

export default Notifications;
