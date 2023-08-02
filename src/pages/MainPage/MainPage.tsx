import { CardContainer } from "./CardContainer";
import { ChartInfo } from "./ChartInfo";
import { mainDataCard } from "../helpers";

import styles from "./mainPage.module.css";

export const MainPage = () => {
  return (
    <main className={styles.main__container}>
      <div className={styles.main__content}>
        <div className={styles.main__content_title_welcome}>
          <h1 className={styles.main__title_welcome}>Bienvenidos</h1>
          <p>Control de inventarios</p>
        </div>

        <div className={styles.main__info_about_page}>
          <div className={styles.main__list_cards}>
            {mainDataCard.map((dataCard) => (
              <CardContainer key={dataCard.nameCard} dataCard={dataCard} />
            ))}
          </div>

          <ChartInfo />
        </div>
      </div>
    </main>
  );
};
