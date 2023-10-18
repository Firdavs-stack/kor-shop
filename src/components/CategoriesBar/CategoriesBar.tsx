import classNames from "classnames";
import styles from "./CategoriesBar.module.css";
import Container from "../shared/Logo/Container/Container";
import Burger from "../shared/Burger/Burger";
import SearchBox from "../shared/SearchBox/SearchBox";

import { useState } from "react";
import Categories from "./Categories/Categories";

const CategoriesBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClick = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  return (
    <div className={classNames(styles.catBar, "h-16 cursor-pointer")}>
      <Container>
        <div className={styles.barInner}>
          <div onClick={handleModalClick} className='flex justify-between gap-3'>
          <Burger isActive={isModalOpen}/>
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
