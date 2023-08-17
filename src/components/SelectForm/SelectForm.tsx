import Select from "react-select";

import { GroupBase } from "./interfaces";

import styles from "./selectForm.module.css";

export const SelectForm = ({
  defaultValue,
  isMulti,
  name,
  onChange,
  options,
  titleLabel,
}: GroupBase) => {
  return (
    <div className={styles.sf__content_label_select}>
      {titleLabel && (
        <label className={styles.sf__label} htmlFor={titleLabel}>
          {titleLabel}
        </label>
      )}

      <Select
        className={styles.sf__select}
        defaultValue={defaultValue}
        isClearable
        isMulti={isMulti}
        name={name}
        onChange={onChange}
        options={options}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            cursor: "text",
            fontSize: "1.1rem",
            height: "3.5rem",
            overflow: "auto",
          }),
        }}
      />
    </div>
  );
};
