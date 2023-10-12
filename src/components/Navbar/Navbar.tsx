import Link from "next/link";
import Logo from "../shared/Logo/Logo";
import styles from "./Navbar.module.css";
import classNames from 'classnames';
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const menuLinks = [
    { label: "О магазине", href: "/" },
    { label: "Как сделать заказ", href: "/order" },
    { label: "Доставка и оплата", href: "/delivery" },
    { label: "Скидки", href: "/discounts" },
    { label: "Контакты", href: "/contacts" },
  ];
  return (
    <nav className='navbar flex items-center justify-between w-full px-6 h-16'>
      <div className={classNames('flex justify-between items-center w-full h-full',styles.rightBlock)}>
        <Logo />
        <ul className={classNames('navbar__menu flex justify-between gap-10 font-medium h-full',styles.menu)}>
          {menuLinks.map((item) => (
            <li key={item.label} className={classNames('h-full flex justify-center items-center px-4 cursor-pointer',router.pathname==item.href ? styles.active : false)}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
