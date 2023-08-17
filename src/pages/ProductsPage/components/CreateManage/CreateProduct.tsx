import { useState } from "react";

import { BsCamera } from "react-icons/bs";
import {
  SelectForm,
  ButtonForm,
  FiltersByWarehouse,
} from "../../../../components";

import { LayoutModal } from "../../../Layout";
import { photoUser } from "../../../../assets";

import styles from "./stylesComponents.module.css";
import { optionsSelect } from "../../interfaces/interfaces";

interface PropsProduct {
  onOpenAddNewProduct: () => void;
  openCreateProduct: boolean;
}

export const CreateProduct = ({
  onOpenAddNewProduct,
  openCreateProduct,
}: PropsProduct) => {
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
            <SelectForm options={optionsSelect} titleLabel="Categoria" />

            <SelectForm options={optionsSelect} titleLabel="Tipo" />

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

            <SelectForm options={optionsSelect} titleLabel="Proveedor" />
          </div>

          <FiltersByWarehouse
            openSelectWarehouse={openSelectWarehouse}
            setOpenSelectWarehouse={setOpenSelectWarehouse}
          />

          <div className={styles.cp__content_separate}>
            <SelectForm
              options={[
                { label: "Simple", value: "Simple" },
                { label: "Compuesto", value: "Compuesto" },
              ]}
              titleLabel="Es simple o compuesto?"
            />

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
