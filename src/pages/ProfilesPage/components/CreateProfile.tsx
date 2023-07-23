import { FC } from "react";
import { LayoutModal } from "../../Layout";
import { ButtonForm, InputForm } from "../../../components";
import { SlUser } from "react-icons/sl";

import styles from "./stylesComponents.module.css";

interface PropsCP {
  onOpenAddNewProfile: () => void;
  openCreateProfile: boolean;
}

export const CreateProfile: FC<PropsCP> = ({
  onOpenAddNewProfile,
  openCreateProfile,
}) => {
  return (
    <LayoutModal
      titleModal="Crear un perfil"
      knowIfOpenClose={openCreateProfile}
      onCloseCreate={onOpenAddNewProfile}
    >
      <form className={styles.cp__form}>
        <p>Nuevo perfil</p>

        <InputForm icon={<SlUser />} placeholder="Nombre..." />

        <textarea
          className={styles.cp__description_textarea}
          placeholder="Descripción..."
        />

        <ButtonForm titleButton="Guardar" />
      </form>
    </LayoutModal>
  );
};
