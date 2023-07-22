import { LayoutModal } from "../../Layout";
import { ButtonForm, InputForm } from "../../../components";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail, MdOutlineWorkOutline } from "react-icons/md";
import { SlUser } from "react-icons/sl";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LiaUserLockSolid } from "react-icons/lia";

import styles from "./componentsStyles.module.css";

interface PropsCS {
  openCreateSupplier: boolean;
  setOpenCreateSupplier: (v: boolean) => void;
}

export const CreateSupplier = ({
  openCreateSupplier,
  setOpenCreateSupplier,
}: PropsCS) => {
  const onCloseCreateSupplier = () => {
    setOpenCreateSupplier(false);
  };

  return (
    <LayoutModal
      knowIfOpenClose={openCreateSupplier}
      onCloseCreate={onCloseCreateSupplier}
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

        <div className={styles.cs__content_selects}>
          <select className={styles.cs__select}>
            <option value="">Paises</option>
            <option value="Colombia">Colombia</option>
          </select>

          <select className={styles.cs__select}>
            <option value="">Departamento</option>
            <option value="Bolivar">Bolivar</option>
          </select>

          <select className={styles.cs__select}>
            <option value="">Ciudad</option>
            <option value="">Cartagena</option>
          </select>
        </div>

        <ButtonForm titleButton="Guardar" />
      </form>
    </LayoutModal>
  );
};
