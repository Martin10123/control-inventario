import { MdArrowForwardIos } from "react-icons/md";
import { PropsCard } from "../interfaces/interfaces";

import styles from "./mainPage.module.css";

export const CardContainer = ({ dataCard }: PropsCard) => {
  const {
    backgroundBtn,
    backgroundCard,
    colorDescription,
    colorTitle,
    descripcionCard,
    imageCard,
    linkGoToCard,
    nameCard,
  } = dataCard;

  return (
    <div
      className={styles.main__container_card}
      style={{ background: backgroundCard }}
    >
      <div className={styles.main__content_card}>
        <figure className={styles.main__card_image_option}>
          <img alt={nameCard} src={imageCard} loading="lazy" />
        </figure>

        <div className={styles.main__card_content_info}>
          <h2 className={styles.main__card_title} style={{ color: colorTitle }}>
            {nameCard}
          </h2>
          <p
            className={styles.main__card_description}
            style={{ color: colorDescription }}
          >
            {descripcionCard}
          </p>
        </div>

        <div className={styles.main__card_content_btn}>
          <button
            className={styles.main__card_btn}
            style={{ background: backgroundBtn }}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
};
