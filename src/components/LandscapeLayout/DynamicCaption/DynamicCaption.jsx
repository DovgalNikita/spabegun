import styles from '../DynamicCaption/DynamicCaption.module.css';

const DynamicCaption = ({children, ...props}) => {
    return(
        <div style={{...props.position}} className={styles.blockDynamicCaption}>
            <div>{children}</div>
            <div></div>
        </div>
    )
}

export default DynamicCaption;