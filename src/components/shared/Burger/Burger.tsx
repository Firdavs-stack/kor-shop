import classNames from "classnames";
import styles from "./Burger.module.css";

const Burger = ({onClick,isActive} :any) => {
  return (
    <div onClick={onClick} className={classNames(styles.burger,isActive ? styles.active : false)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Burger;
