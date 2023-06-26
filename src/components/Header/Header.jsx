import styles from './Header.module.css';
import NavBar from '../UI/NavBar/NavBar';

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.content}>

                <a href="/"><div className={styles.logo}>webSiteLogo</div></a>
                <NavBar />

            </div>
        </header>
    )
}

export default Header;