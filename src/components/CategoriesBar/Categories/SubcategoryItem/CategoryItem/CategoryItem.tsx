import classNames from "classnames";
import { useState } from "react";
import styles from "./CategoryItem.module.css";

const CategoryItem = ({ label, categories }: any) => {
  console.log(categories);
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsShown(true);
      }}
      onMouseLeave={() => {
        setIsShown(false);
      }}
      className={classNames(styles.SubcategoryItem, isShown ? styles.active : false)}>
      {label}
      <div className={styles.subcategories}>
        {categories.map((category: any) => (
          <div key={category.id} className={styles.subSubcategoryItem}>
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
