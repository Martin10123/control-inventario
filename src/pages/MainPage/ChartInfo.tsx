import { BarChart } from "../../components";

import styles from "./mainPage.module.css";

export const ChartInfo = () => {
  const data = [30, 50, 70, 40, 90];
  const labels = ["Barra 1", "Barra 2", "Barra 3", "Barra 4", "Barra 5"];
  const title = "Gráfico de barras";

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
        <BarChart data={data} labels={labels} title={title} />
      </div>
    </div>
  );
};
