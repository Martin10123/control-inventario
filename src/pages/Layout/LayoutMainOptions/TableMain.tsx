import { ButtonForm } from "../../../components";

import styles from "./layoutMain.module.css";

interface TableMainProps {
  children: JSX.Element | JSX.Element[];
}

export const TableMain = ({ children }: TableMainProps) => {
  return (
    <div className={styles.lmo__content_table}>
      <div className={styles.lmo__table}>{children}</div>

      <div className={styles.lmo__content_btn}>
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
  );
};
