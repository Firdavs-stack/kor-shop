import Container from "../shared/Logo/Container/Container";
import Logo from "../shared/Logo/Logo";
import styles from "./Footer.module.css";
import Instagram from "../../../public/icons/instagram.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Vk from "../../../public/icons/vk.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner}>
          <div className={styles.left}>
            <Logo />
          </div>
          <div className={styles.right}>
            Присоединяйтесь к нам
            <div className={styles.socialBox}>
              <div className={styles.socialItem}>
                <a href='/'>
                  <Instagram />
                </a>
              </div>
              <div className={styles.socialItem}>
                <a href='/'>
                  <Facebook />
                </a>
              </div>
              <div className={styles.socialItem}>
                <a href='/'>
                  <Vk />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
