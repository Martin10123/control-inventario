import { Table } from "../../../components";
import { LayoutPages } from "../../Layout";
import { columnsProofOfIncome, proofOfIncome } from "../../helpers";
import { SelectDateProffOfI } from "./SelectDateProffOfI";

export const ProofOfIncome = () => {
  return (
    <LayoutPages
      firstTitle="Comprobantes de ingresos"
      placeholderInput="Buscar..."
      secondTitle="Comprobante"
      chidrenAditional={<SelectDateProffOfI />}
    >
      <Table dataColumns={columnsProofOfIncome} mockData={proofOfIncome} />
    </LayoutPages>
  );
};
