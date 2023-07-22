import { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { LayoutPages } from "../Layout/LayoutPages/LayoutPages";
import { CreateSupplier } from "./components/CreateSupplier";

export const SupplierPage = () => {
  const [openCreateSupplier, setOpenCreateSupplier] = useState(false);

  const onOpenCreateSupplier = () => {
    setOpenCreateSupplier(true);
  };

  return (
    <LayoutPages
      firstTitle="Proveedores"
      Icon={<AiOutlineUserAdd />}
      placeholderInput="Buscar un proveedor..."
      secondTitle="Listado de proveedores"
      onOpenAddNew={onOpenCreateSupplier}
    >
      <h1>Hola</h1>

      <CreateSupplier
        openCreateSupplier={openCreateSupplier}
        setOpenCreateSupplier={setOpenCreateSupplier}
      />
    </LayoutPages>
  );
};
