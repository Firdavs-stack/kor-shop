import classNames from "classnames";
import styles from "./ContentBox.module.css";
import ContentItem from "./ContentItem/ContentsItem";

const ContentBox = ({ title, items }: any) => {
  return (
    <div className={classNames(styles.box, "mb-10")}>
      <h2 className={classNames(styles.boxTitle, "text-2xl mb-4")}>{title}</h2>
      <div className={classNames(styles.boxItems)}>
        {items.map((item: any) => (
          <ContentItem data={item.data} />
        ))}
      </div>
    </div>
  );
};

export default ContentBox;
