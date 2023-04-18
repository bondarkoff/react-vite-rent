import { Link } from 'react-router-dom';
import styles from './Privacy.module.scss';
const Privacy = () => {
    return (
        <div className={styles.privacy}>
            <h2>Privacy & Policy Page</h2>
            <Link to='/'>Back to main page</Link>
        </div>
    );
};

export default Privacy;
