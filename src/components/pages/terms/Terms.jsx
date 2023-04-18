import { Link } from 'react-router-dom';
import styles from './Terms.module.scss';
const Terms = () => {
    return (
        <div className={styles.terms}>
            <h2>Terms of Service page</h2>
            <Link to='/'>Back to main page</Link>
        </div>
    );
};

export default Terms;
