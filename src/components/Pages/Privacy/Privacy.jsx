import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import styles from './Privacy.module.scss';
const Privacy = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Policy & Privacy</title>
                <meta name='description' content='Policy & Privacy page' />
            </Helmet>
            <div className={styles.privacy}>
                <h2>Privacy & Policy Page</h2>
                <Link to='/'>Back to main page</Link>
            </div>
        </HelmetProvider>
    );
};

export default Privacy;
