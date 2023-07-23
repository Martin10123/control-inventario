import { LayoutPages } from "../../Layout";
import { SelectDateProffOfI } from "./SelectDateProffOfI";

export const ProofOfIncome = () => {
  return (
    <LayoutPages
      firstTitle="Comprobantes de ingresos"
      placeholderInput="Buscar..."
      secondTitle="Comprobante"
      chidrenAditional={<SelectDateProffOfI />}
    >
      <h2>Hola</h2>
    </LayoutPages>
  );
};
