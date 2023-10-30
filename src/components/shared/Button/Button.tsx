import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ disabled, title, outlined, onClick }: any) => {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick()}
      className={outlined ? classNames(styles.btn, styles.outlined) : styles.btn}>
      {title}
    </button>
  );
};

export default Button;
