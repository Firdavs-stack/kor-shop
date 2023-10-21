import classNames from "classnames";
import styles from "./Categories.module.css";
import SubcategoryItem from "./SubcategoryItem/SubcategoryItem";
import { useDispatch, useSelector } from "react-redux";

const Categories = ({ isOpen }: any) => {
  const state = useSelector((state:any) => state.categories); 
  console.log(state);
  const categories = [
    { label: "Бакалея", subcategories: [{ label: "Рис/Бумага" }, { label: "Лапша/Вермишель" }] },
    { label: "Бакалея", subcategories: [{ label: "Рис/Бумага" }, { label: "Лапша/Вермишель" }] },
  ];
  return (
    <div className={classNames(styles.categories, isOpen ? styles.active : false)}>
      <div className='relative grid'>
        {state?.baseCategories.map((item:any) => (
          <SubcategoryItem key={item.id} label={item.name} subcategories={state?.subCategories.filter((subCategory:any) => subCategory.base_category == item.id)} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
