import { useState } from "react";
import { BarChart } from "../../components";
import { dataChart, labelsChart } from "../helpers";

import styles from "./mainPage.module.css";

export const ChartInfo = () => {
  const [dataBarChart] = useState({
    labels: labelsChart,
    datasets: [
      {
        label: "Semanal",
        data: dataChart,
        backgroundColor: [
          "#5b54b1",
          "#ffc9ec",
          "#e2cdf8",
          "#64bae5",
          "#cacedf",
          "#ebdcf6",
          "#6c99c9",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className={styles.main__container_self_weeks}>
      <div className={styles.main__content_info_chart}>
        <h2 className={styles.main__title_self_week}>Ventas semanal</h2>

        <div className={styles.main__select_option}>
          <select className={styles.main__select_item}>
            <option value="Punto de venta">Punto de venta</option>
            <option value="Comprobantes">Comprobantes</option>
            <option value="Bodega el toril">Bodega el toril</option>
          </select>
        </div>

        <p className={styles.main__year_now}>{new Date().getFullYear()}</p>
      </div>

      <div className={styles.main__content_grafic}>
        <BarChart data={dataBarChart} />
      </div>
    </div>
  );
};
