import { useState } from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";

import { LayoutPages } from "../Layout";
import { CreateCategory } from "./components/CreateCategory";

import styles from "./categorysPage.module.css";

export const CategorysPage = () => {
  const [openCreateCategory, setOpenCreateCategory] = useState(false);

  const onOpenAddNewCategory = () => {
    setOpenCreateCategory(true);
  };

  return (
    <>
      <LayoutPages
        firstTitle="Categorias"
        Icon={<HiOutlineViewGridAdd />}
        placeholderInput="Buscar una categoria..."
        secondTitle="Listado de categorias"
        onOpenAddNew={onOpenAddNewCategory}
      >
        <h1>Hola</h1>
      </LayoutPages>

      <CreateCategory
        openCreateCategory={openCreateCategory}
        setOpenCreateCategory={setOpenCreateCategory}
      />
    </>
  );
};
