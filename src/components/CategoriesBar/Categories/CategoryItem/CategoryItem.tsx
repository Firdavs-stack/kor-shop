import classNames from "classnames";
import styles from "./CategoryItem.module.css";
import {useState} from 'react';

interface CategoryItem {
  label: string;
  subcategories: Array<any>;
}
const CategoryItem = ({ label, subcategories }: CategoryItem) => {
    const [isShown,setIsShown] = useState(false);
  return (
    <div onMouseEnter={() =>{setIsShown(true)}} onMouseLeave={() => {setIsShown(false)}} className={classNames(styles.categoryItem,isShown ? styles.active : false)}>
      {label}
      <div className={styles.subcategories}>
        {subcategories.map((subcategory) => (
          <div className={styles.subcategoryItem}>{subcategory.label}</div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
