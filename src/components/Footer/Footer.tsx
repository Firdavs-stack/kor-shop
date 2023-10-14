import Logo from '../shared/Logo/Logo';
import styles from './Footer.module.css';

const Footer = () => {
    return ( <footer className={styles.footer}>
        <div className={styles.left}>
            <Logo/>
        </div>
        {/* <div className={styles.right}>
            Присоединяйтесь к нам
            <div className={styles.socialBox}>
                <div className={styles.socialItem}>
                    
                </div>
            </div>
        </div> */}
    </footer> );
}
 
export default Footer;