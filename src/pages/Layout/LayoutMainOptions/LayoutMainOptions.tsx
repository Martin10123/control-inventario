import { ButtonForm } from "../../../components";

import styles from "./layoutMain.module.css";

interface PropsLayout {
  children: JSX.Element | JSX.Element[];
  mainTitle: string;
}

export const LayoutMainOptions: React.FC<PropsLayout> = ({
  children,
  mainTitle,
}) => {
  const dateNow = new Date();
  const dateToday = `${dateNow.getDate()}-0${
    dateNow.getMonth() + 1
  }-${dateNow.getFullYear()}`;

  return (
    <section className={styles.lmo__container}>
      <div className={styles.lmo__content}>
        <header className={styles.lmo__header_title}>
          <h2>{mainTitle}</h2>

          <p>Fecha: {dateToday}</p>
        </header>

        <div className={styles.lmo__content_filter_by}>
          {children}

          <div className={styles.lmo__content_table}>
            <div className={styles.lmo__table}>
              <h2>Tabla</h2>
            </div>

            <ButtonForm
              titleButton="Generar columna"
              stylesInput={{
                height: "3rem",
                padding: "0 1rem",
                width: "fit-content",
              }}
            />
          </div>
        </div>

        <div className={styles.lmo__content_description_and_accumulator}>
          <textarea
            className={styles.lmo__content_textarea}
            placeholder="Descripción..."
          />

          <div className={styles.lmo__accumulator}>
            <p>Acumulado</p>

            <div className={styles.lmo__accumulator_price}>
              <p>Total: 0</p>
            </div>
          </div>
        </div>

        <ButtonForm titleButton="Guardar" />
      </div>
    </section>
  );
};
