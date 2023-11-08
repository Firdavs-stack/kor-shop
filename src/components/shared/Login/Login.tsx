import { useCreateTokenMutation, useInitTokenMutation } from "@/redux/api/apiSlice";
import styles from "./Login.module.css";
import { useEffect } from "react";
import { setCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "@/redux/features/auth/authSlice";
import classNames from "classnames";
import { useState } from "react";
import Button from "../Button/Button";
import {
  changeEmail,
  changeLogin,
  changeName,
  changePassword,
  changePhone,
  changeSurname,
} from "@/redux/features/login/loginSlice";

const Login = ({ onClick }: any) => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const loginParams = [
    { label: "Логин*", placeholder: "Введите логин", type: "login", value: state.login.login },
    { label: "Пароль*", placeholder: "Введите пароль", type: "password", value: state.login.password },
  ];
  const registerParams = [
    { label: "Имя", placeholder: "Введите имя", type: "name", value: state.login.name },
    { label: "Почта", placeholder: "Введите почту", type: "email", value: state.login.email },
    { label: "Пароль", placeholder: "Введите пароль", type: "password", value: state.login.password },
  ];

  const handleInputChange = (value: any, target: any) => {
    switch (target) {
      case "login":
        dispatch(changeLogin(value));
        break;
      case "password":
        dispatch(changePassword(value));
        break;
      case "password":
        dispatch(changePassword(value));
        break;
      case "name":
        dispatch(changeName(value));
        break;
      case "surname":
        dispatch(changeSurname(value));
        break;
      case "phone":
        dispatch(changePhone(value));
        break;
      case "email":
        dispatch(changeEmail(value));
        break;
    }
  };
  const [isSignIn, setIsSignIn] = useState(true);
  const [initToken] = useInitTokenMutation();
  const [createToken] = useCreateTokenMutation();

  const tokenInitialization = (username: any, password: any) => {
    setIsLoading(true);
    initToken({ username: username, password: password }).then(async (res: any) => {
      console.log("vasya", res);
      await dispatch(getToken(res));
      console.log("muchagracia", res?.data?.auth_token);
      await setCookie("token", res?.data?.auth_token);
      setIsLoading(false);
    });
  };
  const tokenCreation = async (name: any, email: any, password: any) => {
    console.log(name, email, password);
    setIsLoading(true);
    await createToken({ username: name, email: email, password: password })
      .then((res: any) => console.log("user created", res))
      .catch((e: any) => console.log(e.message));
    await tokenInitialization(name, password);
    setIsLoading(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.login, "p-4 grid gap-7")}>
        {isSignIn ? (
          <h2 className={classNames("text-3xl", styles.title)}>Вход</h2>
        ) : (
          <h2 className={classNames("text-3xl", styles.title)}>Регистрация</h2>
        )}
        {isSignIn ? (
          <div className={styles.loginInputs}>
            {loginParams.map((item) => (
              <div key={item.label} className={styles.inputBlock}>
                <h6 className={styles.inputTitle}>{item.label}</h6>
                <input
                  value={item.value}
                  onChange={(e) => handleInputChange(e.target.value, item.type)}
                  className={styles.input}
                  placeholder={item.placeholder}></input>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.registerInputs}>
            {registerParams.map((item) => (
              <div key={item.label} className={styles.inputBlock}>
                <h6 className={styles.inputTitle}>{item.label}</h6>
                <input
                  value={item.value}
                  onChange={(e) => handleInputChange(e.target.value, item.type)}
                  className={styles.input}
                  placeholder={item.placeholder}></input>
              </div>
            ))}
          </div>
        )}
        <div className={styles.changeFormType}>
          {isSignIn ? (
            <span>
              Ещё нет акаунта <a onClick={() => setIsSignIn(false)}>зарегестрироваться</a>
            </span>
          ) : (
            <span>
              Уже есть акаунт <a onClick={() => setIsSignIn(true)}>войти</a>
            </span>
          )}
        </div>
        {isSignIn ? (
          <Button
            disabled={isLoading ? true : false}
            onClick={() => tokenInitialization(state?.login?.username, state?.login?.password)}
            outlined
            title={"Войти"}
          />
        ) : (
          <Button
            disabled={isLoading ? true : false}
            onClick={() => tokenCreation(state?.login?.name, state?.login?.email, state?.login?.password)}
            outlined
            title={"Зарегистрироваться"}
          />
        )}
        <div onClick={() => onClick()} className={styles.cross}></div>
      </div>
    </div>
  );
};

export default Login;
