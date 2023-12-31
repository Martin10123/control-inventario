import { FiLock, FiUnlock } from "react-icons/fi";
import { GoShieldLock } from "react-icons/go";
import { ButtonForm, InputForm } from "../../components";

import styles from "./changePassword.module.css";

export const ChangePassword = () => {
  return (
    <section className={styles.cp__container}>
      <div className={styles.cp__content}>
        <div className={styles.cp__contain_info_form}>
          <div className={styles.cp__content_warning_title}>
            <h2>Cambiar contraseña</h2>
            <p>
              Recuerde que debe ser una contraseña segura, que contenga
              caracteres especiales y maximo 6 caracteres
            </p>
          </div>

          <form className={styles.cp__content_form}>
            <InputForm
              icon={<FiUnlock />}
              name="oldPassword"
              type="password"
              placeholder="Contraseña actual"
            />

            <InputForm
              icon={<FiLock />}
              name="newPassword"
              type="password"
              placeholder="Nueva contraseña..."
            />

            <InputForm
              icon={<GoShieldLock />}
              name="repeatPassword"
              type="password"
              placeholder="Confirmar contraseña..."
            />

            <div className={styles.cp__content_button}>
              <ButtonForm titleButton="Actualizar" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
