import { BiCurrentLocation } from "react-icons/bi";
import { CheckOption } from "./CheckOption";
import { ButtonForm, InputForm } from "../../../components";

import styles from "./cuStyles.module.css";

export const InfoUserThree = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "2rem",
          color: "#00c4e8",
          marginBottom: "1.5rem",
          lineHeight: 1.3,
        }}
      >
        Información adicional
      </h2>

      <div className={styles.cu__content_checkbox}>
        <CheckOption title="Inicia sesión" />

        <CheckOption title="¿Cambiar existencia?" />
      </div>

      <InputForm
        icon={<BiCurrentLocation />}
        name="pointSale"
        placeholder="Punto de venta..."
        type="tel"
      />

      <ButtonForm titleButton="Guardar" />
    </>
  );
};
