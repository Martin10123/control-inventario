import { LayoutPages } from "../../Layout";
import { ReportSelectDates } from "./ReportSelectDates";

export const ReturnsReport = () => {
  return (
    <LayoutPages
      chidrenAditional={<ReportSelectDates />}
      firstTitle="Reporte de devoluciones"
      placeholderInput="Buscar..."
      secondTitle="Reporte de salida"
    >
      <h1>ReturnsReport</h1>
    </LayoutPages>
  );
};
