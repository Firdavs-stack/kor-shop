import styles from "./CategoryItem.module.css";

interface CategoryItem {
  label: string;
  subcategories: Array<any>;
}
const CategoryItem = ({ label, subcategories }: CategoryItem) => {
  return (
    <div className={styles.categoryItem}>
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
