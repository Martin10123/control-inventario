import { FC } from "react";
import { SlUser } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCamera } from "react-icons/bs";
import { TbFileReport } from "react-icons/tb";

import { InputForm } from "../../../components";
import { photoUser } from "../../../assets";

import styles from "./componentsStyles.module.css";

interface PropsCard {
  countCards: number;
  onDeleteCard: (u: string) => void;
  uniqueKey: string | undefined;
}

export const CardCategoryInput: FC<PropsCard> = ({
  countCards,
  onDeleteCard,
  uniqueKey = "",
}) => {
  return (
    <div className={styles.cc__content_quatity_categories}>
      <div className={styles.cc__select_image}>
        <figure className={styles.cc__fi_image}>
          <img
            alt="Foto relacionada a la categoria"
            src={photoUser}
            width="100%"
          />
        </figure>

        <span className={styles.cc__icon_camera}>
          <BsCamera /> Seleccionar una foto
        </span>
      </div>

      <InputForm
        classNameDiv={styles.cc__input_name}
        icon={<TbFileReport />}
        placeholder="Orden..."
      />

      <InputForm
        classNameDiv={styles.cc__input_name}
        icon={<SlUser />}
        placeholder="Nombre..."
      />

      <textarea
        className={styles.cc__description_textarea}
        placeholder="Breve descripción"
      />

      {countCards !== 1 && (
        <button
          className={styles.cc__btn_delete_this_category}
          onClick={() => onDeleteCard(uniqueKey)}
        >
          <RiDeleteBinLine />
        </button>
      )}
    </div>
  );
};
