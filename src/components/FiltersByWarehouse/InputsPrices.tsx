import { BsCurrencyDollar } from "react-icons/bs";
import { InputForm } from "..";
import { RiChatPrivateLine } from "react-icons/ri";
import { AiOutlineFieldNumber } from "react-icons/ai";

import styles from "./filtersByWarehouse.module.css";

export const InputsPrices = () => {
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
