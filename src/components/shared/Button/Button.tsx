import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({title, outlined,onClick}:any) => {
    return ( <button onClick={() => onClick()} className={outlined ? classNames(styles.btn,styles.outlined) : styles.btn}>
        {title}
    </button> );
}
 
export default Button;