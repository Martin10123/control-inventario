import { Table } from "../../../components";
import { LayoutPages } from "../../Layout";
import { columnsReturnsReport, returnsReport } from "../../helpers";
import { ReportSelectDates } from "./ReportSelectDates";

export const ReturnsReport = () => {
  return (
    <LayoutPages
      chidrenAditional={<ReportSelectDates />}
      firstTitle="Reporte de devoluciones"
      placeholderInput="Buscar..."
      secondTitle="Reporte de salida"
    >
      <Table dataColumns={columnsReturnsReport} mockData={returnsReport} />
    </LayoutPages>
  );
};
