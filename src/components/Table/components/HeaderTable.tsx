import { flexRender } from "@tanstack/react-table";
import { PropsHeaderTable } from "../interfaces/interfaces";

import styles from "./componentStyles.module.css";

export const HeaderTable: React.FC<PropsHeaderTable> = ({
  getHeaderGroups,
}) => {
  return (
    <thead className={styles.table__thead}>
      {getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className={styles.table__thead_tr}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} className={styles.table__th}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
