import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h2>404 PAGE NOT FOUND</h2>
            <Link to='/'>Back to main page</Link>
        </div>
    );
};

export default NotFound;
