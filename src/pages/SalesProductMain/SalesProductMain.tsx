import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsCalendar2Date, BsPhone } from "react-icons/bs";
import { SlLocationPin, SlUser } from "react-icons/sl";
import { HiOutlineIdentification } from "react-icons/hi";

import { InputForm, SelectForm } from "../../components";
import { LayoutMainOptions } from "../Layout";

import styles from "./salesProductMain.module.css";

export const SalesProductMain = () => {
  return (
    <LayoutMainOptions mainTitle="Venta de productos">
      <div className={styles.sp__form_filter_by}>
        <InputForm
          icon={<AiOutlineFieldNumber />}
          placeholder="Número de orden"
        />

        <InputForm icon={<BsCalendar2Date />} type="date" />

        <SelectForm>
          <option value="Comprobantes">Comprobantes</option>
          <option value="Bodega el toril">Bodega el toril</option>
        </SelectForm>

        <SelectForm>
          <option value="">Vendedor</option>
        </SelectForm>

        <InputForm
          icon={<HiOutlineIdentification />}
          placeholder="Identificación..."
          type="number"
        />

        <InputForm icon={<SlUser />} placeholder="Nombre del cliente..." />

        <InputForm icon={<SlLocationPin />} placeholder="Dirección..." />

        <InputForm icon={<BsPhone />} placeholder="Telefono" type="number" />
      </div>
    </LayoutMainOptions>
  );
};
