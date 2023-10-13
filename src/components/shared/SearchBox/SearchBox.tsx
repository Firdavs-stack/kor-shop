import styles from "./SearchBox.module.css";
import SearchIcon from "../../../../public/icons/search.svg";

const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <SearchIcon />
      <input placeholder='Я хочу купить' />

      <button className={styles.btn}>Найти</button>
    </div>
  );
};

export default SearchBox;
