import { useState } from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SearchProductBy } from "./components/SearchProductBy";
import { CreateProduct } from "./components/CreateProduct";

import { LayoutPages } from "../Layout";

export const ProductsPage = () => {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);

  const onOpenAddNewProduct = () => {
    setOpenCreateProduct(!openCreateProduct);
  };

  return (
    <>
      <LayoutPages
        chidrenAditional={<SearchProductBy />}
        firstTitle="Productos"
        Icon={<MdProductionQuantityLimits />}
        onOpenAddNew={onOpenAddNewProduct}
        placeholderInput="Buscar un producto..."
        secondTitle="Lista de productos"
      >
        <h1>aa</h1>
      </LayoutPages>

      <CreateProduct
        onOpenAddNewProduct={onOpenAddNewProduct}
        openCreateProduct={openCreateProduct}
      />
    </>
  );
};
