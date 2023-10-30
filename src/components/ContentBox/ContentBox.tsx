import classNames from "classnames";
import styles from "./ContentBox.module.css";
import ContentItem from "./ContentItem/ContentsItem";
import { useSelector } from "react-redux";

const ContentBox = ({ title }: any) => {
  const state = useSelector((state: any) => state.products);

  return (
    <div className={classNames(styles.box, "mb-10")}>
      <h2 className={classNames(styles.boxTitle, "text-2xl mb-4")}>{title}</h2>
      <div className={classNames(styles.boxItems)}>
        {state?.products?.map((item: any) => <ContentItem data={item} />)}
      </div>
    </div>
  );
};

export default ContentBox;
