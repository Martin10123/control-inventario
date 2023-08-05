import { flexRender } from "@tanstack/react-table";
import { PropsHeaderTable } from "../interfaces/interfaces";

import styles from "./componentStyles.module.css";

export const HeaderTable = <T extends object>({
  getHeaderGroups,
}: PropsHeaderTable<T>) => {
  return (
    <thead className={styles.table__thead}>
      {getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className={styles.table__thead_tr}>
          {headerGroup.headers.map((header) => (
            <th
              className={styles.table__th}
              key={header.id}
              onClick={header.column.getToggleSortingHandler()}
            >
              {header.isPlaceholder ? null : (
                <div className={styles.table__is_sorting}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}

                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
