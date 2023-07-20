import { FC, CSSProperties, InputHTMLAttributes } from "react";

import styles from "./inputForm.module.css";

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  icon: JSX.Element;
  showError?: boolean;
  stylesCError?: CSSProperties;
  stylesCInputF?: CSSProperties;
  stylesInput?: CSSProperties;
  stylesTitleError?: CSSProperties;
}

export const InputForm: FC<PropsInput> = ({
  errorMessage,
  icon: Icon,
  showError,
  stylesCError,
  stylesCInputF,
  stylesInput,
  stylesTitleError,
  ...rest
}: PropsInput) => {
  return (
    <div className={styles.if__content_input_error}>
      <div
        className={styles.if__content_input_form}
        style={{ ...stylesCInputF }}
      >
        {Icon}
        <input
          {...rest}
          className={styles.if__input_form}
          style={{ ...stylesInput }}
        />
      </div>

      {showError && (
        <div
          className={styles.if__content_show_error}
          style={{ ...stylesCError }}
        >
          <p className={styles.if__title_error} style={{ ...stylesTitleError }}>
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
};
