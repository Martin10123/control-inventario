import { Fragment } from "react";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { ButtonForm, InputForm } from "..";
import { RiChatPrivateLine } from "react-icons/ri";
import { PropsFilterBy, listWarehouse, useFilterBy } from "./useFilterBy";

import styles from "./filtersByWarehouse.module.css";

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

              {selectedWarehouses.includes(idWareLabel) && <InputPrices />}
            </Fragment>
          ))}

          {isCheckSamePrice && selectedWarehouses.length === 0 && (
            <>
              <h2 className={styles.fbw__title_same_price}>
                Mismos valores para todos
              </h2>
              <InputPrices />
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

const InputPrices = () => {
  return (
    <div className={styles.fbw__content_separates_inputs}>
      <div className={styles.fbw__separate_inputs}>
        <InputForm
          classNameDiv={styles.fbw__input}
          icon={<BsCurrencyDollar />}
          placeholder="$100.000.00"
          titleLabel="Costo"
        />

        <InputForm
          classNameDiv={styles.fbw__input}
          icon={<RiChatPrivateLine />}
          placeholder="25"
          titleLabel="Iva (%)"
        />
      </div>

      <div className={styles.fbw__separate_inputs}>
        <InputForm
          classNameDiv={styles.fbw__input}
          icon={<BsCurrencyDollar />}
          placeholder="90.000.00"
          titleLabel="Precio VTA"
        />

        <InputForm
          classNameDiv={styles.fbw__input}
          icon={<AiOutlineFieldNumber />}
          placeholder="500"
          titleLabel="Existencias"
        />
      </div>
    </div>
  );
};
