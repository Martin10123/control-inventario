import { FC, useState } from "react";

import { BsCamera } from "react-icons/bs";
import {
  SelectForm,
  ButtonForm,
  FiltersByWarehouse,
} from "../../../components";

import { LayoutModal } from "../../Layout";
import { photoUser } from "../../../assets";

import styles from "./stylesComponents.module.css";

interface PropsProduct {
  onOpenAddNewProduct: () => void;
  openCreateProduct: boolean;
}

export const CreateProduct: FC<PropsProduct> = ({
  onOpenAddNewProduct,
  openCreateProduct,
}) => {
  const [openSelectWarehouse, setOpenSelectWarehouse] = useState(false);

  return (
    <LayoutModal
      knowIfOpenClose={openCreateProduct}
      onCloseCreate={onOpenAddNewProduct}
      titleModal="Crear un producto"
    >
      <form className={styles.cp__form}>
        <div className={styles.cp__contain_photo}>
          <figure className={styles.cp__photo_user}>
            <img src={photoUser} alt="Foto de perfil del producto" />

            <figcaption>
              <BsCamera />
            </figcaption>
          </figure>
        </div>

        <div className={styles.cp__contain_inputs}>
          <div className={styles.cp__content_separate}>
            <SelectForm className={styles.cp__select} titleLabel="Categoria">
              <option value="">Escoger</option>
            </SelectForm>

            <SelectForm className={styles.cp__select} titleLabel="Tipo">
              <option value="">Escoger</option>
            </SelectForm>

            <div className={styles.cp__content_select_warehouse}>
              <label htmlFor="selectWarehouse">Bodega</label>

              <div
                className={styles.cp__select_warehouse}
                onClick={() => setOpenSelectWarehouse(true)}
                id="selectWarehouse"
              >
                <p>Escoger</p>
              </div>
            </div>

            <SelectForm className={styles.cp__select} titleLabel="Proveedor">
              <option value="">Escoger</option>
            </SelectForm>
          </div>

          <FiltersByWarehouse
            openSelectWarehouse={openSelectWarehouse}
            setOpenSelectWarehouse={setOpenSelectWarehouse}
          />

          <div className={styles.cp__content_separate}>
            <SelectForm
              className={styles.cp__select}
              titleLabel="Es simple o compuesto?"
            >
              <option value="">Simple</option>
              <option value="">Compuesto</option>
            </SelectForm>

            <textarea
              className={styles.cp__description_textarea}
              placeholder="Descripción..."
            />

            <ButtonForm titleButton="Guardar" />
          </div>
        </div>
      </form>
    </LayoutModal>
  );
};
