import { BsCamera } from "react-icons/bs";
import { photoUser } from "../../../assets";
import { InputForm } from "../../../components";
import { listCreateUser } from "../../../helpers";

import styles from "./cuStyles.module.css";

export const InfoUserOne = () => {
  return (
    <>
      <div className={styles.cu__content_photo_user}>
        <figure className={styles.cu__photo_user}>
          <img src={photoUser} alt="Foto de perfil del usuario" />

          <figcaption>
            <BsCamera />
          </figcaption>
        </figure>
      </div>

      <div className={styles.cu__content_select}>
        <select className={styles.cu__select_profile}>
          <option value="Administrador">Administrador</option>
          <option value="Gerencia">Gerencia</option>
          <option value="Ventas">Ventas</option>
          <option value="Comprobantes">Comprobantes</option>
        </select>
      </div>

      {listCreateUser.slice(0, 4).map(({ Icon, name, placeholder, type }) => (
        <InputForm
          key={name}
          icon={Icon}
          name="pointSale"
          placeholder={placeholder}
          type={type}
        />
      ))}
    </>
  );
};
