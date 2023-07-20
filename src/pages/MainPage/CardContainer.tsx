import styles from "./mainPage.module.css";

interface PropsCard {
  Icon: JSX.Element;
  title: string;
}

export const CardContainer = ({ Icon, title }: PropsCard) => {
  return (
    <div className={styles.main__container_card}>
      <span className={styles.main__content_icon}>{Icon}</span>
      <div className={styles.main__content_info}>
        <p>{title}</p>
        <button className={styles.main__btn_getinto}>Ingresar</button>
      </div>
    </div>
  );
};
