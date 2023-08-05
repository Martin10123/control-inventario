import { useState } from "react";
import { MdProductionQuantityLimits } from "react-icons/md";

import { CreateProduct } from "./components/CreateProduct";
import { columnsProducts, products } from "../helpers";
import { LayoutPages } from "../Layout";
import { SearchProductBy } from "./components/SearchProductBy";
import { Table } from "../../components";

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
        secondTitle="Lista de productos"
      >
        <Table dataColumns={columnsProducts} mockData={products} />
      </LayoutPages>

      <CreateProduct
        onOpenAddNewProduct={onOpenAddNewProduct}
        openCreateProduct={openCreateProduct}
      />
    </>
  );
};
