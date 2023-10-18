import Link from "next/link";
import Logo from "../shared/Logo/Logo";
import styles from "./Navbar.module.css";
import classNames from "classnames";
import { useRouter } from "next/router";
import Container from "../shared/Logo/Container/Container";

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
    <nav className='navbar'>
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
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
