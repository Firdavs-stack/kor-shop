import classNames from "classnames";
import styles from "./Burger.module.css";

const Burger = () => {
  return (
    <div className={classNames(styles.burger)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Burger;
