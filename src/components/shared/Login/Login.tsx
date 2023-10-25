import { useGetTokenMutation } from '@/redux/api/apiSlice';
import styles from './Login.module.css';
import { useEffect } from 'react';
import {setCookie} from 'cookies-next';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '@/redux/features/auth/authSlice';
import classNames from 'classnames';
import {useState} from 'react';

const Login = () => {
    const loginParams = [{label: 'Логин', placeholder: 'Введите логин'},{label: 'Пароль', placeholder: 'Введите пароль'}]
    const registerParams = [{label: 'Имя', placeholder: 'Введите имя'},{label: 'Фамилия', placeholder: 'Введите фамилию'},{label: 'Номер телефона', placeholder: 'Введите номер'},{label: 'Почта', placeholder: 'Введите почту'}, {label: 'Пароль', placeholder: 'Введите пароль'}]

    const state = useSelector((state:any) => state.auth);
    const dispatch =useDispatch();

    const [isSignIn,setIsSignIn] = useState(true); 

    const [createToken] = useGetTokenMutation();

    const tokenCreation = () => {
        createToken({username: 'Firdavs',password: '12345678fF'})
            .then((res:any) => dispatch(getToken(res)));
    }
    return ( <div className={styles.wrapper}>
       <div className={classNames(styles.login,'p-4 grid gap-4')}>
            {isSignIn ? <h2 className={classNames('text-3xl', styles.title)}>Вход</h2> : <h2 className={classNames('text-3xl', styles.title)}>Регистрация</h2>}
            <div className={styles.inputs}>
                {loginParams.map(item => 
                    <div key={item.label} className={styles.inputBlock}>
                    <h6 className={styles.inputTitle}>{item.label}</h6>
                    <input className={styles.input} placeholder={item.placeholder}></input>
                </div>
                )}
            </div>
        </div>
    </div> );
}
 
export default Login;