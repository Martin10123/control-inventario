import { FC } from "react";
import { LayoutModal } from "../../Layout";

import styles from "./stylesComponents.module.css";
import { photoUser } from "../../../assets";
import { BsCamera, BsCurrencyDollar } from "react-icons/bs";
import { SelectForm } from "../../../components/SelectForm/SelectForm";
import { InputForm } from "../../../components/InputForm/InputForm";
import { ButtonForm } from "../../../components/ButtonForm/ButtonForm";
import { AiOutlineFieldNumber } from "react-icons/ai";

interface PropsProduct {
  onOpenAddNewProduct: (b: boolean) => void;
  openCreateProduct: boolean;
}

export const CreateProduct: FC<PropsProduct> = ({
  onOpenAddNewProduct,
  openCreateProduct,
}) => {
  return (
    <LayoutModal
      knowIfOpenClose={openCreateProduct}
      onCloseCreate={onOpenAddNewProduct}
      titleModal="Crear un producto"
    >
      <form action="" className={styles.cp__form}>
        <div className={styles.cp__content_photo_user}>
          <figure className={styles.cp__photo_user}>
            <img src={photoUser} alt="Foto de perfil del usuario" />

            <figcaption>
              <BsCamera />
            </figcaption>
          </figure>
        </div>

        <SelectForm>
          <option value="">Categorias</option>
        </SelectForm>

        <SelectForm>
          <option value="">Tipo</option>
        </SelectForm>

        <textarea
          className={styles.cp__description_textarea}
          placeholder="Descripción..."
        />

        <SelectForm>
          <option value="">Punto de venta</option>
        </SelectForm>

        <InputForm icon={<BsCurrencyDollar />} placeholder="Costo..." />

        <InputForm icon={<BsCurrencyDollar />} placeholder="Precio VTA..." />

        <SelectForm>
          <option value="">Proveedor</option>
        </SelectForm>

        <InputForm
          icon={<AiOutlineFieldNumber />}
          placeholder="Existencias..."
        />

        <ButtonForm titleButton="Guardar" />
      </form>
    </LayoutModal>
  );
};
