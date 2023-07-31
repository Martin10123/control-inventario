import { Table } from "../../components";
import { LayoutPages } from "../Layout";
import { clientsList, columnsClientsList } from "../helpers";

export const ClientListMain = () => {
  return (
    <LayoutPages
      firstTitle="Clientes"
      placeholderInput="Buscar un cliente"
      secondTitle="Listado de clientes"
    >
      <Table dataColumns={columnsClientsList} mockData={clientsList} />
    </LayoutPages>
  );
};
