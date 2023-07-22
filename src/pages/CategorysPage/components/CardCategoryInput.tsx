import { FC } from "react";
import { SlUser } from "react-icons/sl";
import { TbFileDescription } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";

import { InputForm } from "../../../components";

import styles from "./componentsStyles.module.css";

interface PropsCard {
  onDeleteCard: (u: string) => void;
  uniqueKey: string | undefined;
}

export const CardCategoryInput: FC<PropsCard> = ({
  onDeleteCard,
  uniqueKey = "",
}) => {
  return (
    <div className={styles.cc__content_quatity_categories}>
      <InputForm icon={<SlUser />} placeholder="Nombre..." />

      <InputForm icon={<TbFileDescription />} placeholder="Descripción..." />

      <button
        className={styles.cc__btn_delete_this_category}
        onClick={() => onDeleteCard(uniqueKey)}
      >
        <RiDeleteBinLine />
      </button>
    </div>
  );
};
