import { FC, SelectHTMLAttributes } from "react";

import styles from "./selectForm.module.css";

interface PropsSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  children: JSX.Element | JSX.Element[];
  titleLabel?: string;
}

export const SelectForm: FC<PropsSelect> = ({
  children,
  titleLabel,
  ...rest
}) => {
  const stylesRequired = rest.className
    ? `${styles.sf__select} ${rest.className} `
    : styles.sf__select;

  return (
    <div className={styles.sf__content_label_select}>
      {titleLabel && (
        <label className={styles.sf__label} htmlFor={titleLabel}>
          {titleLabel}
        </label>
      )}
      <select {...rest} className={stylesRequired} id={titleLabel}>
        {children}
      </select>
    </div>
  );
};
