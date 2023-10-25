import { useGetTokenMutation } from '@/redux/api/apiSlice';
import styles from './Login.module.css';
import { useEffect } from 'react';
import {setCookie} from 'cookies-next';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '@/redux/features/auth/authSlice';
import classNames from 'classnames';
import {useState} from 'react';
import Button from '../Button/Button';
import { changeLogin, changePassword } from '@/redux/features/login/loginSlice';

const Login = () => {
    const state = useSelector((state:any) => state);
    const dispatch =useDispatch();

    const loginParams = [{label: 'Логин*', placeholder: 'Введите логин',type: 'login',value: state.login.login},{label: 'Пароль*', placeholder: 'Введите пароль',type: 'password',value: state.login.password}]
    const registerParams = [{label: 'Имя', placeholder: 'Введите имя'},{label: 'Фамилия', placeholder: 'Введите фамилию'},{label: 'Номер телефона', placeholder: 'Введите номер'},{label: 'Почта', placeholder: 'Введите почту'}, {label: 'Пароль', placeholder: 'Введите пароль'}]

    const handleInputChange = (value:any,target:any) => {
        switch (target){
            case 'login':
                dispatch(changeLogin(value));
                break;
            case 'password':
                dispatch(changePassword(value));
                break; 
        }
    }
    const [isSignIn,setIsSignIn] = useState(true); 
    const [createToken] = useGetTokenMutation();

    const tokenCreation = (username:any,password:any) => {
        createToken({username:username,password:password})
            .then((res:any) => dispatch(getToken(res)));

        console.log(state.auth.token);
        console.log(state.login.login);
        console.log(state.login.password);
    }
    return ( <div className={styles.wrapper}>
       <div className={classNames(styles.login,'p-4 grid gap-7')}>
            {isSignIn ? <h2 className={classNames('text-3xl', styles.title)}>Вход</h2> : <h2 className={classNames('text-3xl', styles.title)}>Регистрация</h2>}
            <div className={styles.inputs}>
                {loginParams.map(item => 
                    <div key={item.label} className={styles.inputBlock}>
                    <h6 className={styles.inputTitle}>{item.label}</h6>
                    <input value={item.value} onChange={(e) => handleInputChange(e.target.value,item.type)} className={styles.input} placeholder={item.placeholder}></input>
                </div>
                )}
            </div>
            <Button onClick={() => {tokenCreation(state?.login?.login,state?.login?.password)}} outlined title='Войти'/>
        </div>
    </div> );
}
 
export default Login;