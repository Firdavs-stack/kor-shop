import { useState } from "react";
import styles from "./ContentItem.module.css";

const ContentItem = ({ data }: any) => {
  const [average,setAverage] = useState(1);
  return <div className={styles.item}>
    <div className={styles.imagebox}>
      <img src={data.image} alt="image: card image"/>
    </div>
    <h3 className={styles.title}>{data.name}</h3>
    <div className={styles.priceBox}>
      <div className={styles.price}>{data.price} сум.</div>
      <div className={styles.btnBox}>
        <div className={styles.avSelector}>
        <button onClick={()=>{setAverage((state) => state!=1 ? state-1 : state)}} className={styles.avBtn}>-</button>
          {average}
        <button onClick={()=>{setAverage((state) => state+1)}} className={styles.avBtn}>+</button>
        </div>
      </div>
    </div>
    <div className={styles.basket}>В корзину</div>
  </div>;
};

export default ContentItem;
