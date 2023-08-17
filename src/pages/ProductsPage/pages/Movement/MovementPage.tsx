import { BsArrowsMove } from "react-icons/bs";
import { LayoutPages } from "../../../Layout";
import { columnsProductMovement } from "../../../helpers";
import { movement } from "../../../../JSON";
import { Table } from "../../../../components";
import { CreateMovement } from "../../components";
import { useState } from "react";

export const MovementPage = () => {
  const [openCreateMovement, setOpenCreateMovement] = useState(false);

  const onOpenAddNewMovement = () => {
    setOpenCreateMovement(!openCreateMovement);
  };

  return (
    <>
      <LayoutPages
        firstTitle="Movimientos"
        Icon={<BsArrowsMove />}
        onOpenAddNew={onOpenAddNewMovement}
        secondTitle="Lista de movimietos"
      >
        <Table dataColumns={columnsProductMovement} mockData={movement} />
      </LayoutPages>

      <CreateMovement
        onOpenAddNewMovement={onOpenAddNewMovement}
        openCreateMovement={openCreateMovement}
      />
    </>
  );
};
