import { HeaderTable, BodyTable, Pagination } from "./components";
import { useTableCustom } from "./hook/useTableCustom";
import { PropsTable } from "./interfaces/interfaces";

import styles from "./table.module.css";

export const Table = <T extends object>({
  dataColumns,
  mockData,
}: PropsTable<T>) => {
  const {
    getCanNextPage,
    getCanPreviousPage,
    getHeaderGroups,
    getPageCount,
    getRowModel,
    nextPage,
    previousPage,
    setPageIndex,
  } = useTableCustom({ dataColumns, mockData });

  return (
    <div className={styles.table__container}>
      <div className={styles.table__content}>
        <table className={styles.table__table}>
          <HeaderTable getHeaderGroups={getHeaderGroups} />

          <BodyTable getRowModel={getRowModel} />
        </table>

        <Pagination
          getCanNextPage={getCanNextPage}
          getCanPreviousPage={getCanPreviousPage}
          getPageCount={getPageCount}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageIndex={setPageIndex}
        />
      </div>
    </div>
  );
};
