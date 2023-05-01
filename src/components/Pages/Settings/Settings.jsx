import { Helmet, HelmetProvider } from 'react-helmet-async';

import styles from './Settings.module.scss';

const Settings = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Settings page</title>
                    <meta name='description' content='Settings page' />
                </Helmet>
                <div className='container'>
                    <div className={styles.settings}>
                        <h2 className='mt-46'>Settings page</h2>
                    </div>
                </div>
            </HelmetProvider>
        </>
    );
};

export default Settings;
