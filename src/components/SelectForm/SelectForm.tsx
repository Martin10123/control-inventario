import { FC, SelectHTMLAttributes } from "react";

import styles from "./selectForm.module.css";

interface PropsSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  children: JSX.Element | JSX.Element[];
}

export const SelectForm: FC<PropsSelect> = ({ children, ...rest }) => {
  return (
    <select className={styles.sf__select} {...rest}>
      {children}
    </select>
  );
};
