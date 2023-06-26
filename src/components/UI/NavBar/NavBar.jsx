import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className={styles.menu}>
            <Link to="/calculator" className={styles.menu__item}>Расчитать стоимость</Link>
            <Link to="" className={styles.menu__item}>Примеры работ</Link>
            <Link to="/contacts" className={styles.menu__item}>Контакты</Link>
            <Link to="/about" className={styles.menu__item}>О себе</Link>
        </div>
    )
}

export default NavBar;