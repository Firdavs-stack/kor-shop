import classNames from "classnames";
import styles from "./Categories.module.css";
import CategoryItem from "./CategoryItem/CategoryItem";

const Categories = ({ isOpen }: any) => {
  const categories = [
    { label: "Бакалея", subcategories: [{ label: "Рис/Бумага" }, { label: "Лапша/Вермишель" }] },
    { label: "Бакалея", subcategories: [{ label: "Рис/Бумага" }, { label: "Лапша/Вермишель" }] },
  ];
  return (
    <div className={classNames(styles.categories, isOpen ? styles.active : false)}>
      <div className="relative grid">
      {categories.map((item) => (
        <CategoryItem key={item.label} label={item.label} subcategories={item.subcategories} />
      ))}
      </div>
    </div>
  );
};

export default Categories;
