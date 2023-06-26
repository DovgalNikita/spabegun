import React from 'react';
import styles from './Main.module.css';
import Header from '../../components/Header/Header';
import LandscapeLayout from '../../components/LandscapeLayout/LandscapeLayout';
import DynamicCaption from '../../components/LandscapeLayout/DynamicCaption/DynamicCaption';

const Main = () => {
    return(
        <div className={styles.mainPage}>

            <Header />

            <main className={styles.content}>
                
                <div className={styles.leftIncription}>
                    <div className={styles.firstParagraph}>Объединяя <br/><span>дизайн</span> и <span>технологии</span></div>
                    <div className={styles.firstParagraph}>мы превращаем <br/><span>воображение</span> в <span>реальность.</span></div>
                    <div className={styles.firstParagraph}><div><span>Хороший</span> дизайн</div><div>делает <span>мир лучше</span></div></div>
                </div>

                <div className={styles.cornerInscription}>Доступные <span>решения</span> для ваших <span>творческих</span> потребностей</div>
                <div className={styles.bottomInscription}>Мир полный творчества</div>

                
                <LandscapeLayout />
                

            </main>
        </div>
    )
}

export default Main;