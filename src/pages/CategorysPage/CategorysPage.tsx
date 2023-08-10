import { useState } from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";

import { LayoutPages } from "../Layout";
import { CreateCategory } from "./components/CreateCategory";
import { categories, columnsCategories } from "../helpers";
import { Table } from "../../components";

export const CategorysPage = () => {
  const [openCreateCategory, setOpenCreateCategory] = useState(false);

  const onOpenAddNewCategory = () => {
    setOpenCreateCategory(!openCreateCategory);
  };

  return (
    <>
      <LayoutPages
        firstTitle="Categorias"
        Icon={<HiOutlineViewGridAdd />}
        secondTitle="Listado de categorias"
        onOpenAddNew={onOpenAddNewCategory}
      >
        <Table dataColumns={columnsCategories} mockData={categories} />
      </LayoutPages>

      <CreateCategory
        onOpenAddNewCategory={onOpenAddNewCategory}
        openCreateCategory={openCreateCategory}
      />
    </>
  );
};
