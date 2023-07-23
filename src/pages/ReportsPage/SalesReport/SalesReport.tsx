import { LayoutPages } from "../../Layout";
import { SalesReportDates } from "./SalesReportDates";

export const SalesReport = () => {
  return (
    <LayoutPages
      chidrenAditional={<SalesReportDates />}
      firstTitle="Reporte de devoluciones"
      placeholderInput="Buscar..."
      secondTitle="Reporte de salida"
    >
      <h1>Sales Report</h1>
    </LayoutPages>
  );
};
