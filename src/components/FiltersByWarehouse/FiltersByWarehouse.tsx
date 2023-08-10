import { Fragment } from "react";
import { ButtonForm } from "..";

import { PropsFilterBy, listWarehouse, useFilterBy } from "./useFilterBy";

import styles from "./filtersByWarehouse.module.css";
import { InputsPrices } from "./InputsPrices";

export const FiltersByWarehouse = ({
  openSelectWarehouse,
  setOpenSelectWarehouse,
}: PropsFilterBy) => {
  const {
    isCheckSamePrice,
    onCheckAll,
    onCloseFilterBy,
    onIsCheckSamePrice,
    onWarehouseSelection,
    selectedWarehouses,
    stylesOpenModal,
  } = useFilterBy({ openSelectWarehouse, setOpenSelectWarehouse });

  return (
    <div
      className={`${styles.fbw__container} animate__animated animate__${stylesOpenModal}`}
    >
      <div className={styles.fbw__content}>
        <div className={styles.fbw__title}>
          <h2>Precio por bodega</h2>
        </div>

        <div className={styles.fbw__filter_by}>
          <div className={styles.fbw__filter_item}>
            <input
              id="samePrice"
              name="samePrice"
              onChange={onIsCheckSamePrice}
              type="checkbox"
            />
            <label htmlFor="samePrice">Mismo valor para todos</label>
          </div>

          <div className={styles.fbw__filter_item}>
            <input
              id="selectAll"
              name="selectAll"
              onChange={onCheckAll}
              type="checkbox"
            />
            <label htmlFor="selectAll">Seleccionar todos</label>
          </div>
        </div>

        <ul className={styles.fbw__list}>
          <h2>Seleccionar una bodega</h2>

          {listWarehouse.map(({ nameWare, idWareLabel }) => (
            <Fragment key={nameWare}>
              <li className={styles.fbw__item}>
                <input
                  checked={selectedWarehouses.includes(idWareLabel)}
                  id={idWareLabel}
                  name={idWareLabel}
                  onChange={({ target }) =>
                    onWarehouseSelection({ target, idWareLabel })
                  }
                  type="checkbox"
                />
                <label htmlFor={idWareLabel}>{nameWare}</label>
              </li>

              {selectedWarehouses.includes(idWareLabel) && <InputsPrices />}
            </Fragment>
          ))}

          {isCheckSamePrice && selectedWarehouses.length === 0 && (
            <>
              <h2 className={styles.fbw__title_same_price}>
                Mismos valores para todos
              </h2>
              <InputsPrices />
            </>
          )}
        </ul>
        <div className={styles.fbw__content_buttons}>
          <ButtonForm
            className={styles.fbw__input_accept}
            titleButton="Guardar"
          />
          <ButtonForm
            className={styles.fbw__input_cancel}
            onClick={onCloseFilterBy}
            titleButton="Cancelar"
          />
        </div>
      </div>
    </div>
  );
};
