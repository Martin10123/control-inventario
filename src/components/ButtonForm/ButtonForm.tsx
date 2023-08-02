import { ButtonHTMLAttributes, CSSProperties, FC } from "react";

import styles from "./buttonForm.module.css";

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  titleButton: string;
  stylesButton?: CSSProperties;
}

export const ButtonForm: FC<PropsButton> = ({
  stylesButton,
  titleButton,
  ...rest
}) => {
  return (
    <button {...rest} className={styles.btn__btn_save} style={stylesButton}>
      {titleButton}
    </button>
  );
};
