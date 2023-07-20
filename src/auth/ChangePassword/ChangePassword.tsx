import { BiLeftArrow } from "react-icons/bi";

import { FiLock, FiUnlock } from "react-icons/fi";
import { GoShieldLock } from "react-icons/go";

import styles from "./changePassword.module.css";

export const ChangePassword = () => {
  return (
    <section className={styles.cp__container}>
      <div className={styles.cp__content}>
        <nav className={styles.cp__nav}>
          <BiLeftArrow />
          <p>Cambiar contraseña</p>
        </nav>

        <div className={styles.cp__contain_info_form}>
          <div className={styles.cp__content_warning_title}>
            <h2>Cambiar contraseña</h2>
            <p>
              Recuerde que debe ser una contraseña segura, que contenga
              caracteres especiales y maximo 6 caracteres
            </p>
          </div>

          <form className={styles.cp__content_form}>
            <div className={styles.cp__content_input_form}>
              <FiUnlock />
              <input
                type="password"
                className={styles.cp__input_form}
                placeholder="Contraseña actual..."
              />
            </div>
            <div className={styles.cp__content_input_form}>
              <FiLock />

              <input
                type="password"
                className={styles.cp__input_form}
                placeholder="Nueva contraseña..."
              />
            </div>
            <div className={styles.cp__content_input_form}>
              <GoShieldLock />

              <input
                type="password"
                className={styles.cp__input_form}
                placeholder="Confirmar contraseña..."
              />
            </div>

            <div className={styles.cp__content_button}>
              <button className={styles.cp__btn_change}>Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
