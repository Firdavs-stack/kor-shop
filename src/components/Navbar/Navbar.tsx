import Link from "next/link";
import Logo from "../shared/Logo/Logo";
import Person from "../../../public/icons/person.svg";
import styles from "./Navbar.module.css";
import classNames from "classnames";
import { useRouter } from "next/router";
import Container from "../shared/Logo/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import Login from "../shared/Login/Login";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

const Navbar = () => {
  const state = useSelector((state: any) => state.auth);
  const token = getCookie("token") || state?.token;
  console.log("opeyne", token);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(isOpen){
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight='16px'
    }else{
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight='unset';
    }
  },[isOpen])
  const router = useRouter();
  const menuLinks = [
    { label: "О магазине", href: "/" },
    { label: "Как сделать заказ", href: "/order" },
    { label: "Доставка и оплата", href: "/delivery" },
    { label: "Скидки", href: "/discounts" },
    { label: "Контакты", href: "/contacts" },
  ];
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <nav className={styles.navbar}>
        <Container>
          <div className={classNames("flex items-center justify-between w-full h-16", styles.rightBlock)}>
            <Logo />
            <ul
              className={classNames(
                "navbar__menu flex justify-between gap-10 font-medium h-full",
                styles.menu,
              )}>
              {menuLinks.map((item) => (
                <li
                  key={item.label}
                  className={classNames(
                    "h-full flex justify-center items-center cursor-pointer",
                    router.pathname == item.href ? classNames(styles.active, "px-4") : false,
                  )}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <ul className={classNames("navbar__mobile-menu", styles.mobileMenu)}>
              {menuLinks.map((item) => (
                <li
                  key={item.label}
                  className={classNames(
                    "h-full flex justify-center items-center cursor-pointer",
                    router.pathname == item.href ? classNames(styles.active, "px-4") : false,
                  )}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            {!token ? (
              <div className={styles.login}>
                <Person />
                <div
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className={styles.loginMenu}>
                  Вход/регистрация
                </div>
              </div>
            ) : (
              <div>Authorized</div>
            )}
          </div>
        </Container>
      </nav>
      {isOpen && !token ? <Login onClick={handleClick} /> : null}
    </div>
  );
};

export default Navbar;
