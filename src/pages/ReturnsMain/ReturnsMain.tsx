import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

import { InputForm, SelectForm } from "../../components";
import { LayoutMainOptions } from "../Layout";

import styles from "./returnsMain.module.css";

export const ReturnsMain = () => {
  return (
    <LayoutMainOptions mainTitle="Devoluciones">
      <div className={styles.rm__form_filter_by}>
        <InputForm
          icon={<AiOutlineFieldNumber />}
          placeholder="Número de orden"
        />

        <InputForm icon={<BsCalendar2Date />} type="date" />

        <SelectForm>
          <option value="Comprobantes">Punto de venta</option>
        </SelectForm>

        <InputForm icon={<SlLocationPin />} placeholder="Dirección..." />
      </div>
    </LayoutMainOptions>
  );
};
