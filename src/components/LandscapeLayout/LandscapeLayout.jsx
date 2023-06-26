import landsacpeImg from '../../assets/images/landscapeLayout.png'
import styles from './LandscapeLayout.module.css';
import DynamicCaption from './DynamicCaption/DynamicCaption';

const LandscapeLayout = () => {
    return(
        <div className={styles.blockLandscape}>
            <DynamicCaption position={{marginLeft:'310px', marginTop:'50px'}}>Дом</DynamicCaption>
            <DynamicCaption position={{marginLeft:'430px', marginTop:'-10px'}}>Сад</DynamicCaption>
            <DynamicCaption position={{marginLeft:'300px', marginTop:'-50px'}}>Баня</DynamicCaption>
            <DynamicCaption position={{marginLeft:'110px', marginTop:'180px'}}>Навес</DynamicCaption>
            <DynamicCaption position={{marginLeft:'200px', marginTop:'250px'}}>Передний двор</DynamicCaption>
            <DynamicCaption position={{marginLeft:'460px', marginTop:'-40px'}}>Летняя беседка</DynamicCaption>
            <DynamicCaption position={{marginLeft:'415px', marginTop:'280px'}}>Склады</DynamicCaption>
            <img src={landsacpeImg} alt=""/>
        </div>
    )
}

export default LandscapeLayout;