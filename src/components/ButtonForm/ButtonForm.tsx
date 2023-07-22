import { ButtonHTMLAttributes, CSSProperties, FC } from "react";

import styles from "./buttonForm.module.css";

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  titleButton: string;
  stylesDivContent?: CSSProperties;
  stylesInput?: CSSProperties;
}

export const ButtonForm: FC<PropsButton> = ({
  stylesDivContent,
  stylesInput,
  titleButton,
  ...rest
}) => {
  return (
    <div className={styles.btn__content_button} style={stylesDivContent}>
      <button {...rest} className={styles.btn__btn_save} style={stylesInput}>
        {titleButton}
      </button>
    </div>
  );
};
