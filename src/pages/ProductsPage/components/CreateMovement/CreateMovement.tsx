import { useState, ChangeEvent } from "react";
import { LayoutModal } from "../../../Layout";
import {
  InputForm,
  SelectForm,
  ButtonForm,
  NewValueProps,
  PropsOption,
} from "../../../../components";
import {
  PropsProductMovement,
  optionsSelect,
} from "../../interfaces/interfaces";
import { BsCalendar2Date } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";

import styles from "./createMovement.module.css";

export const CreateMovement = ({
  onOpenAddNewMovement,
  openCreateMovement,
}: PropsProductMovement) => {
  const [selectProducts, setSelectProducts] = useState<string[]>([]);
  const [checkSameStock, setCheckSameStock] = useState(false);

  const onChangeSelect = (value: NewValueProps) => {
    if (!value) return;

    const valueSelect = Object.values(value).map(
      (item: PropsOption) => item.value
    );

    setSelectProducts(valueSelect);
  };

  const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckSameStock(e.target.checked);
  };

  return (
    <LayoutModal
      knowIfOpenClose={openCreateMovement}
      onCloseCreate={onOpenAddNewMovement}
      titleModal="Crear nuevo movimientos"
    >
      <form className={styles.cm__form}>
        <div className={styles.cm__content_form_without_stock}>
          <InputForm
            icon={<BsCalendar2Date />}
            titleLabel="Fecha"
            type="date"
          />

          <SelectForm
            isMulti
            onChange={onChangeSelect}
            options={optionsSelect}
            titleLabel="Productos"
          />

          <SelectForm options={optionsSelect} titleLabel="Origen" />

          <SelectForm titleLabel="Llegada" options={optionsSelect} />

          {selectProducts.length !== 0 && (
            <div className={styles.cm__content_input_check}>
              <label htmlFor="allStock">Cantidad de existencias iguales</label>

              <input
                checked={checkSameStock}
                className={styles.cm__input_check}
                id="allStock"
                onChange={onChangeCheck}
                type="checkbox"
              />
            </div>
          )}
        </div>

        <div className={styles.cm__content_stock_each_product}>
          <div className={styles.cm__content_stock_each_product_item}>
            {checkSameStock ? (
              <InputForm
                icon={<AiOutlineStock />}
                titleLabel={`Stock - (todos los productos)`}
                type="number"
              />
            ) : (
              <>
                {selectProducts.map((product) => (
                  <InputForm
                    icon={<AiOutlineStock />}
                    titleLabel={`Stock - (${product})`}
                    type="number"
                    key={product}
                  />
                ))}
              </>
            )}
          </div>

          <ButtonForm titleButton="Guardar" />
        </div>
      </form>
    </LayoutModal>
  );
};
