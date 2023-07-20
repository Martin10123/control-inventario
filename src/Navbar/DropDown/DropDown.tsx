import { FiMoon } from "react-icons/fi";
import { LuDoorOpen } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";

import { photoUser } from "../../assets";
import { usePreventScroll } from "../../hooks";

import styles from "./dropdown.module.css";

interface PropsDrop {
  setOpenDropDown: (v: boolean) => void;
}

export const DropDown = ({ setOpenDropDown }: PropsDrop) => {
  usePreventScroll();

  return (
    <div className={styles.dd__container}>
      <div
        className={styles.dd__content_background}
        onClick={() => setOpenDropDown(false)}
      ></div>
      <div className={styles.dd__content_info}>
        <div className={styles.dd__item_user}>
          <figure className={styles.dd__photo_user}>
            <img src={photoUser} alt="Foto de perfil del usuario" />
          </figure>
          <div className={styles.dd__displayname}>
            <p>Martin Elias</p>
            <span>Administrador</span>
          </div>
        </div>
        <ul className={styles.dd__list}>
          <li className={styles.dd__item}>
            <RiUserSettingsLine />
            <p>Cambiar contraseña</p>
          </li>
          <li className={styles.dd__item}>
            <FiMoon />
            <p>Cambiar a oscuro</p>
          </li>
          <li className={styles.dd__item}>
            <LuDoorOpen />
            <p>Cerrar sesión</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
