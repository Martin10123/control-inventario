import { Table } from "../../../components";
import { LayoutPages } from "../../Layout";
import { columnsSalesReport, salesReport } from "../../helpers";
import { SalesReportDates } from "./SalesReportDates";

export const SalesReport = () => {
  return (
    <LayoutPages
      chidrenAditional={<SalesReportDates />}
      firstTitle="Reporte de devoluciones"
      placeholderInput="Buscar..."
      secondTitle="Reporte de salida"
    >
      <Table dataColumns={columnsSalesReport} mockData={salesReport} />
    </LayoutPages>
  );
};
