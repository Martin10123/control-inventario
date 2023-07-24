import { InputForm, SelectForm } from "../../components";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import { LayoutMainOptions } from "../Layout";

import styles from "./ProofOfIncomeMain.module.css";

export const ProofOfIncomeMain = () => {
  return (
    <LayoutMainOptions mainTitle="Registrar comprobantes de ingresos">
      <div className={styles.poi__form_filter_by}>
        <InputForm
          icon={<AiOutlineFieldNumber />}
          placeholder="Número de orden"
        />

        <InputForm icon={<BsCalendar2Date />} type="date" />

        <SelectForm>
          <option value="Comprobantes">Comprobantes (Entrada)</option>
          <option value="Bodega el toril">Bodega el toril</option>
        </SelectForm>

        <SelectForm>
          <option value="">Punto de venta (Destino)</option>
          <option value="Comprobantes">Comprobantes</option>
          <option value="Bodega el toril">Bodega el toril</option>
        </SelectForm>
      </div>
    </LayoutMainOptions>
  );
};
