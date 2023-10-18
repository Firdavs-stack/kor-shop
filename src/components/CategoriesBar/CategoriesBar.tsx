import classNames from "classnames";
import styles from "./CategoriesBar.module.css";
import Container from "../shared/Logo/Container/Container";
import Burger from "../shared/Burger/Burger";
import SearchBox from "../shared/SearchBox/SearchBox";

import { useState } from "react";
import Categories from "./Categories/Categories";
import { useRouter } from "next/router";

const CategoriesBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleModalClick = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };
  const handleMobileModalClick = () => {
    alert(router.pathname);
  };

  return (
    <div className={classNames(styles.catBar, "h-16 cursor-pointer")}>
      <Container>
        <div className={styles.barInner}>
          <div
            onClick={
              typeof window != "undefined"
                ? window.matchMedia("(max-width: 700px)").matches
                  ? handleMobileModalClick
                  : handleModalClick
                : () => {
                    return;
                  }
            }
            className='flex justify-between gap-3'>
            <Burger isActive={isModalOpen} />
            Каталог товаров
          </div>
          <SearchBox />
          <Categories isOpen={isModalOpen} />
        </div>
      </Container>
    </div>
  );
};

export default CategoriesBar;
