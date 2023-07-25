import { Link } from "react-router-dom";

import styles from "./mainPage.module.css";

interface PropsCard {
  Icon: JSX.Element;
  linkGoTo: string;
  title: string;
}

export const CardContainer = ({ Icon, title, linkGoTo }: PropsCard) => {
  return (
    <div className={styles.main__container_card}>
      <span className={styles.main__content_icon}>{Icon}</span>
      <div className={styles.main__content_info}>
        <p>{title}</p>
        <Link className={styles.main__btn_getinto} to={linkGoTo}>
          Ingresar
        </Link>
      </div>
    </div>
  );
};
