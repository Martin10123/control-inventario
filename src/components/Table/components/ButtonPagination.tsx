import { PropsBtnPagination } from "../interfaces/interfaces";

import styles from "./componentStyles.module.css";

export const ButtonPagination: React.FC<PropsBtnPagination> = ({
  Icon,
  onActionBtn,
  ...props
}) => {
  return (
    <button
      {...props}
      className={styles.table__btn_pagination}
      onClick={onActionBtn}
    >
      {Icon}
    </button>
  );
};
