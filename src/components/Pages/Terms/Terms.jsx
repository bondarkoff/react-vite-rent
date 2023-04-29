import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import styles from './Terms.module.scss';
const Terms = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Terms of Service</title>
                <meta name='description' content='Terms of Service page' />
            </Helmet>
            <div className={styles.terms}>
                <h2>Terms of Service page</h2>
                <Link to='/'>Back to main page</Link>
            </div>
        </HelmetProvider>
    );
};

export default Terms;
