import { FC, InputHTMLAttributes } from "react";

import styles from "./inputForm.module.css";

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
  classNameDiv?: string;
  errorMessage?: string;
  icon: JSX.Element;
  showError?: boolean;
  titleLabel?: string;
}

export const InputForm: FC<PropsInput> = ({
  classNameDiv,
  errorMessage,
  icon: Icon,
  showError,
  titleLabel,
  ...rest
}) => {
  const stylesRequired = classNameDiv
    ? `${classNameDiv} ${styles.if__content_input_form}`
    : styles.if__content_input_form;

  return (
    <>
      <div className={styles.if__content_label_input}>
        {titleLabel && (
          <label className={styles.if__label} htmlFor={titleLabel}>
            {titleLabel}
          </label>
        )}

        <div className={stylesRequired}>
          {Icon}
          <input {...rest} className={styles.if__input_form} id={titleLabel} />
        </div>
      </div>

      {showError && (
        <div className={styles.if__content_show_error}>
          <p className={styles.if__title_error}>{errorMessage}</p>
        </div>
      )}
    </>
  );
};
