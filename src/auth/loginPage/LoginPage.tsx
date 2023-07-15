import { useState } from "react";
import { LiaLockSolid } from "react-icons/lia";
import { MdAlternateEmail } from "react-icons/md";
import { PiEyeLight } from "react-icons/pi";

import { logoApp, montainsDesk } from "../../assets";
import { ShowError } from "../../components";

import styles from "./loginPage.module.css";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.login__container}>
      <div className={styles.login__image_back}></div>
      <div className={styles.login__contain_image_logo}>
        <figure className={styles.login__image_logo}>
          <img src={logoApp} alt="Logo de la app" />
        </figure>
      </div>

      <div className={styles.login__content}>
        <figure className={styles.login__image_desk}>
          <img src={montainsDesk} alt="Login de la app" />
        </figure>

        <div className={styles.login__info_about_login}>
          <h2>Login</h2>

          <form className={styles.login__form}>
            <div className={styles.login__form_input}>
              <span className={styles.login__icon_input}>
                <MdAlternateEmail />
              </span>
              <input
                className={styles.login__input}
                placeholder="Ingresar su usuario..."
                type="text"
              />
            </div>

            {false && (
              <ShowError
                titleError="Debe ingresar un usuario"
                styles={{ margin: 0, height: "2.5rem" }}
              />
            )}

            <div className={styles.login__form_input}>
              <span className={styles.login__icon_input}>
                <LiaLockSolid />
              </span>
              <div className={styles.login__content_input_password}>
                <input
                  className={styles.login__input_password}
                  placeholder="Ingresar su contraseña..."
                  type={showPassword ? "text" : "password"}
                />

                <span className={styles.login__icon_input_show}>
                  <PiEyeLight onClick={() => setShowPassword(!showPassword)} />
                </span>
              </div>
            </div>

            {false && (
              <ShowError
                titleError="Debe ingresar una contraseña"
                styles={{ margin: 0, height: "2.5rem" }}
              />
            )}

            <div className={styles.login__content_btn}>
              <button className={styles.login__btn_sent}>Ingresar</button>
            </div>
          </form>

          {false && <ShowError titleError="Error" />}
        </div>
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
  );
};
