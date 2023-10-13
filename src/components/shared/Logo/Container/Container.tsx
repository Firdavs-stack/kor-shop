import { FC, PropsWithChildren } from 'react';
import styles from './Container.module.css';
import classNames from 'classnames';

const Container:FC<PropsWithChildren>= (props) => {
    return ( <div className={classNames(styles.container,'px-4 mx-auto my-0 h-full')}>{props.children}</div> );
}
 
export default Container;