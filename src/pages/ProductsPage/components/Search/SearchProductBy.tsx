import { BiDownload, BiSearchAlt } from "react-icons/bi";
import { SelectForm } from "../../../../components";
import { optionsSelect } from "../../interfaces/interfaces";

import styles from "./searchProductBy.module.css";

export const SearchProductBy = () => {
  return (
    <div className={styles.sp__container_selects}>
      <p>Filtar por: </p>

      <div className={styles.sp__contain_info_outside_title}>
        <div className={styles.sp__content_selects_search}>
          <SelectForm titleLabel="Punto de venta" options={optionsSelect} />

          <SelectForm titleLabel="Categoria" options={optionsSelect} />
        </div>

        <div className={styles.sp__content_buttons}>
          <button className={styles.sp__btn}>
            <BiSearchAlt />
          </button>
          <button className={styles.sp__btn}>
            <BiDownload />
          </button>
        </div>
      </div>
    </div>
  );
};
