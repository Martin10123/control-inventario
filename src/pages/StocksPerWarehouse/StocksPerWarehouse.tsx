import { LayoutPages } from "../Layout";

import { SelectForm } from "../../components/SelectForm/SelectForm";

import styles from "./stocksPerWarehouse.module.css";

export const StocksPerWarehouse = () => {
  return (
    <LayoutPages
      firstTitle="Existencias en bodega"
      placeholderInput="Buscar en bodega..."
      secondTitle="Existencias en bodega"
      chidrenAditional={
        <div className={styles.spw__content_select}>
          <SelectForm>
            <option value="">Punto de venta</option>
          </SelectForm>
        </div>
      }
    >
      <h1>Stocks Per Warehouse</h1>
    </LayoutPages>
  );
};
