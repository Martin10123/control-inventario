import { BsGraphUpArrow } from "react-icons/bs";

import { PiUserCircle } from "react-icons/pi";
import { TbDeviceAnalytics, TbPresentationAnalytics } from "react-icons/tb";

import { CardContainer } from "./CardContainer";
import { ChartInfo } from "./ChartInfo";

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
          <div className={styles.main__content_list_cards}>
            <div className={styles.main__list_cards}>
              <CardContainer
                Icon={<TbPresentationAnalytics />}
                linkGoTo="/proofIncome"
                title="Comprobantes de ingresos"
              />

              <CardContainer
                Icon={<BsGraphUpArrow />}
                linkGoTo="/salesProduct"
                title="Registrar ventas"
              />

              <CardContainer
                Icon={<TbDeviceAnalytics />}
                linkGoTo="/returns"
                title="Devoluciones"
              />

              <CardContainer
                Icon={<PiUserCircle />}
                linkGoTo="/clientList"
                title="Clientes"
              />
            </div>
          </div>

          <ChartInfo />
        </div>
      </div>
    </main>
  );
};
