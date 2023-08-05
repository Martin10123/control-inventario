import { BiDownload, BiSearchAlt } from "react-icons/bi";
import { SelectForm } from "../../../components";

import styles from "./stylesComponents.module.css";

export const SearchProductBy = () => {
  return (
    <div className={styles.sp__container_selects}>
      <p>Filtar por: </p>

      <div className={styles.sp__contain_info_outside_title}>
        <div className={styles.sp__content_selects_search}>
          <SelectForm className={styles.sp__select_filter}>
            <option value="">Punto de ventas</option>
          </SelectForm>
          <SelectForm className={styles.sp__select_filter}>
            <option value="">Categorias</option>
          </SelectForm>
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
