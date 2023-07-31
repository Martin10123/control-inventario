import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";

import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { InputForm, SelectForm } from "../../components";
import { LayoutMainOptions } from "../Layout";
import { TableMain } from "../Layout";

import styles from "./ProofOfIncomeMain.module.css";

interface DataTable {
  exists: number;
  idProduct: number;
  nameProduct: string;
  quality: number;
  totalValue: number;
  unitValue: number;
}

export const ProofOfIncomeMain = () => {
  const [columnTable, setcolumnTable] = useState<DataTable>();

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

      <TableMain>
        <div className={styles.poi__contain_table}>
          <table className={styles.poi__table}>
            <thead className={styles.poi__table_head}>
              <tr className={styles.poi__head_tr}>
                <th className={styles.poi__head_th}>Nro.</th>
                <th className={styles.poi__head_th}>Producto</th>
                <th className={styles.poi__head_th}>Cantidad</th>
                <th className={styles.poi__head_th}>Exist.</th>
                <th className={styles.poi__head_th}>Valor Unit</th>
                <th className={styles.poi__head_th}>Valor Total</th>
              </tr>
            </thead>

            <tbody className={styles.poi__table_body}>
              <tr className={styles.poi__body_tr}>
                <td className={styles.poi__body_td}>1</td>
                <td className={styles.poi__body_td}>
                  <div className={styles.poi__input_with_delete}>
                    <InputForm
                      icon={<BiSearchAlt />}
                      stylesCInputF={{ width: "18rem" }}
                    />

                    <span className={styles.poi__btn_delete}>
                      <MdOutlineRemoveShoppingCart />
                    </span>
                  </div>
                </td>
                <td className={styles.poi__body_td}>
                  <div className={styles.poi__input_with_delete}>
                    <InputForm
                      icon={<AiOutlineFieldNumber />}
                      type="number"
                      stylesCInputF={{ width: "8rem" }}
                    />
                  </div>
                </td>
                <td className={styles.poi__body_td}>10.000</td>
                <td className={styles.poi__body_td}>10.000.000.000.00</td>
                <td className={styles.poi__body_td}>10.000.000.000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </TableMain>
    </LayoutMainOptions>
  );
};
