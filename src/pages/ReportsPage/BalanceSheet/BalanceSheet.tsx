import { LayoutPages } from "../../Layout";
import { RangeDates } from "./RangeDates";

export const BalanceSheet = () => {
  return (
    <LayoutPages
      chidrenAditional={<RangeDates />}
      firstTitle="Balance general"
      placeholderInput="Buscar..."
      secondTitle="Reporte general"
    >
      <h1>BalanceSheet</h1>
    </LayoutPages>
  );
};
