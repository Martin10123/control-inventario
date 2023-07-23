import { FC } from "react";
import { LayoutModal } from "../../Layout";
import { ButtonForm, InputForm, SelectForm } from "../../../components";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail, MdOutlineWorkOutline } from "react-icons/md";
import { SlUser } from "react-icons/sl";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LiaUserLockSolid } from "react-icons/lia";

import styles from "./componentsStyles.module.css";

interface PropsCS {
  onOpenCreateSupplier: () => void;
  openCreateSupplier: boolean;
}

export const CreateSupplier: FC<PropsCS> = ({
  onOpenCreateSupplier,
  openCreateSupplier,
}) => {
  return (
    <LayoutModal
      knowIfOpenClose={openCreateSupplier}
      onCloseCreate={onOpenCreateSupplier}
      titleModal="Nuevo proveedor"
    >
      <form className={styles.cs__form}>
        <InputForm icon={<SlUser />} placeholder="Nombre..." />

        <InputForm
          icon={<LiaUserLockSolid />}
          placeholder="Nombre contacto..."
        />

        <InputForm
          icon={<MdOutlineWorkOutline />}
          placeholder="Cargo contacto..."
        />

        <InputForm icon={<MdAlternateEmail />} placeholder="Email..." />

        <InputForm icon={<BsTelephone />} placeholder="Telefono..." />

        <InputForm
          icon={<HiOutlineLocationMarker />}
          placeholder="Dirección..."
        />

        <SelectForm>
          <option value="">Paises</option>
          <option value="Colombia">Colombia</option>
        </SelectForm>

        <SelectForm>
          <option value="">Departamento</option>
          <option value="Bolivar">Bolivar</option>
        </SelectForm>

        <SelectForm>
          <option value="">Ciudad</option>
          <option value="">Cartagena</option>
        </SelectForm>

        <ButtonForm titleButton="Guardar" />
      </form>
    </LayoutModal>
  );
};
