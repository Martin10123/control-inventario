import { ButtonHTMLAttributes } from "react";

import styles from "./buttonForm.module.css";

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  titleButton: string;
}

export const ButtonForm = ({ titleButton, ...rest }: PropsButton) => {
  const stylesRequired = rest.className
    ? `${styles.btn__btn_save} ${rest.className} `
    : styles.btn__btn_save;

  return (
    <button {...rest} className={stylesRequired}>
      {titleButton}
    </button>
  );
};
