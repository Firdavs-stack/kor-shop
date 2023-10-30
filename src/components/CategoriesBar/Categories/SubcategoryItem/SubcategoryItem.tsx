import classNames from "classnames";
import styles from "./SubcategoryItem.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem/CategoryItem";

interface SubcategoryItem {
  label: string;
  subcategories: Array<any>;
}
const SubcategoryItem = ({ label, subcategories }: SubcategoryItem) => {
  const state = useSelector((state: any) => state.categories);

  console.log(state.baseCategories);
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
        {subcategories.map((subcategory) => (
          <CategoryItem
            key={subcategory.id}
            label={subcategory.name}
            className={styles.subSubcategoryItem}
            categories={state?.categories.filter((category: any) => category.base_category == subcategory.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SubcategoryItem;
