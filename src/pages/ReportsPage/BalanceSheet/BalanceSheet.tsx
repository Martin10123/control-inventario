import { Table } from "../../../components";
import { LayoutPages } from "../../Layout";
import { balanceSheet, columnsBalanceSheet } from "../../helpers";
import { RangeDates } from "./RangeDates";

export const BalanceSheet = () => {
  return (
    <LayoutPages
      chidrenAditional={<RangeDates />}
      firstTitle="Balance general"
      placeholderInput="Buscar..."
      secondTitle="Reporte general"
    >
      <Table dataColumns={columnsBalanceSheet} mockData={balanceSheet} />
    </LayoutPages>
  );
};
