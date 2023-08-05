import { PropsShowRegisters } from "../interfaces/interfaces";

import styles from "./componentStyles.module.css";

export const ShowRegistersCount = ({
  pageIndex,
  getPageOptions,
  onGoToPageInput,
  pageSize,
  onCreateOtherRow,
}: PropsShowRegisters) => {
  return (
    <div className={styles.table__count_registers}>
      <p>
        Pagina {pageIndex + 1} de {getPageOptions().length} registros
      </p>

      <div className={styles.table__content_pages_go_to}>
        <div className={styles.table__input_go_to_page}>
          <p>Ir a la pagina:</p>
          <input
            defaultValue={pageIndex + 1}
            max={getPageOptions().length}
            min={1}
            onChange={onGoToPageInput}
            placeholder="1"
            type="number"
          />
        </div>

        <div className={styles.table__content_select_rows}>
          <select value={pageSize} onChange={onCreateOtherRow}>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Ver {pageSize} columnas
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
