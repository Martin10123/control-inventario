import { flexRender } from "@tanstack/react-table";
import { PropsBodyTable } from "../interfaces/interfaces";

import styles from "./componentStyles.module.css";

export const BodyTable = <T extends object>({
  getRowModel,
}: PropsBodyTable<T>) => {
  return (
    <tbody className={styles.table__tbody}>
      {getRowModel().rows.map((row) => (
        <tr key={row.id} className={styles.table__tbody_tr}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className={styles.table__td}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
