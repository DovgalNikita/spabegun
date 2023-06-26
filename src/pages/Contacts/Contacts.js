import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import styles from './Contacts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contacts = () => {

    const [load, setLoad] = useState(false);


    return(
        <div className={styles.contactsPage}>

            <Header />
            <div className={styles.content}>
                
                
                <iframe className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3Adb320f78fd6080cef7944c097251cdf6c49ae5e42dcded7d4e77d33a5c736c82&amp;source=constructor" 
                    width="100%" height="600" frameborder="0" onLoad={()=>setLoad(true)}></iframe>
                
                {
                    load
                    ?<div className={styles.contacts}>
                        <div className={styles.title}>Где меня найти?</div>
                        <div className={styles.information}>
                            <div> <a href="tel:+78005553535"> <span>Телефон:</span> +7-800-555-35-35 </a> </div>
                            <div> <a href="mailto:mail@mail.ru"> <span>E-mail:</span> mail@mail.ru </a> </div>
                            <div>  <span>Адрес:</span> 350000, г. Краснодар, ул. им. Сергея Есеннина, д.7  </div>
                        </div>
                        <div className={styles.icons}>
                            {/* <a><FontAwesomeIcon icon={faFacebook} /></a> */}
                        </div>
                    </div>
                    :null
                }

            </div>
        </div>
    )
}

export default Contacts;