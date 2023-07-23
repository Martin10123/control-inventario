import { FC } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsCalendar4Week } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { InputForm } from "../";

import styles from "./selectDateInput.module.css";

interface PropsRangeDates {
  children?: JSX.Element | JSX.Element[];
}

export const SelectDateInput: FC<PropsRangeDates> = ({ children }) => {
  return (
    <div className={styles.rg__content_range_dates}>
      <h3>Filtrar por: </h3>

      <div className={styles.sdpoi__content_select}>{children}</div>

      <h2>Rango de fechas</h2>

      <div className={styles.rg__content_dates}>
        <div className={styles.rg__input_form_date}>
          <label>Desde</label>
          <InputForm icon={<BsCalendar4Week />} type="date" />
        </div>
        <div className={styles.rg__input_form_date}>
          <label>Hasta</label>
          <InputForm icon={<BsCalendar4Week />} type="date" />
        </div>

        <div className={styles.rg__content_buttons}>
          <button className={styles.rg__btn_search}>
            <BiSearchAlt />
          </button>
          <button className={styles.rg__btn_generate_pdf}>
            <FaRegFilePdf />
          </button>
        </div>
      </div>
    </div>
  );
};
