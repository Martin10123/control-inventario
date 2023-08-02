import { useState } from "react";
import { LiaLockSolid } from "react-icons/lia";
import { MdAlternateEmail } from "react-icons/md";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

import { InputForm, ButtonForm, ShowError } from "../../components";
import { loginImage } from "../../assets";

import styles from "./loginPage.module.css";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.login__container}>
      <div className={styles.login__contain_all_info}>
        <div className={styles.login__content_form_image}>
          <div className={styles.login__content}>
            <h2>Login</h2>

            <form className={styles.login__form}>
              <InputForm
                icon={<MdAlternateEmail />}
                placeholder="Ingrese su email..."
              />

              <div className={styles.login__form_input}>
                <InputForm
                  icon={<LiaLockSolid />}
                  placeholder="Ingrese su contraseña..."
                  stylesCInputF={{ boxShadow: "none" }}
                  type={showPassword ? "text" : "password"}
                />

                {showPassword ? (
                  <PiEyeSlashLight onClick={onShowPassword} />
                ) : (
                  <PiEyeLight onClick={onShowPassword} />
                )}
              </div>

              <div className={styles.login__content_btn}>
                <ButtonForm titleButton="Ingresar" />
              </div>
            </form>

            {false && <ShowError titleError="Error" />}
          </div>
          <div className={styles.login__footer}>
            <p className={styles.login__title_footer}>
              © Copyright 2023 Create by:{" "}
              <a href="http://www.wdgcartagena.com/" target="_blank">
                Web Developers Group
              </a>
            </p>
          </div>
        </div>

        <figure className={styles.login__content_image}>
          <img src={loginImage} alt="Imagen relacionada al login" />
        </figure>
      </div>
    </div>
  );
};
