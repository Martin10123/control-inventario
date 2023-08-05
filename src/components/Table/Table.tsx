import { BiSearchAlt } from "react-icons/bi";
import { InputForm } from "..";
import {
  HeaderTable,
  BodyTable,
  Pagination,
  ShowRegistersCount,
} from "./components";
import { useTableCustom } from "./hook/useTableCustom";
import { PropsTable } from "./interfaces/interfaces";

import styles from "./table.module.css";

export const Table = <T extends object>({
  dataColumns,
  mockData,
}: PropsTable<T>) => {
  const {
    filterByRow,
    getCanNextPage,
    getCanPreviousPage,
    getHeaderGroups,
    getPageCount,
    getPageOptions,
    getRowModel,
    nextPage,
    onChangeInputFilter,
    onCreateOtherRow,
    onGoToPageInput,
    pageIndex,
    pageSize,
    previousPage,
    setPageIndex,
  } = useTableCustom({ dataColumns, mockData });

  return (
    <>
      <div className={styles.lyp__content_input_search_table}>
        <InputForm
          classNameDiv={styles.lyp__input_search}
          icon={<BiSearchAlt />}
          name="searchUser"
          onChange={onChangeInputFilter}
          placeholder="Buscar..."
          type="text"
          value={filterByRow}
        />
      </div>
      <div className={styles.table__container}>
        <div className={styles.table__content}>
          <table className={styles.table__table}>
            <HeaderTable getHeaderGroups={getHeaderGroups} />

            <BodyTable getRowModel={getRowModel} />
          </table>
        </div>
        <div className={styles.table__content_count_registers}>
          <ShowRegistersCount
            getPageOptions={getPageOptions}
            onCreateOtherRow={onCreateOtherRow}
            onGoToPageInput={onGoToPageInput}
            pageIndex={pageIndex}
            pageSize={pageSize}
          />

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
    </>
  );
};
