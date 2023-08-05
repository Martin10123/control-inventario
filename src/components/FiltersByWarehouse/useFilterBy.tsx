import { FormEvent, useState } from "react";

export const listWarehouse = [
  { nameWare: "Bodega el toril", idWareLabel: "houseToril" },
  { nameWare: "Bodega el mercado", idWareLabel: "houseMarket" },
  { nameWare: "Comprobantes", idWareLabel: "proof" },
];

export interface PropsFilterBy {
  openSelectWarehouse: boolean;
  setOpenSelectWarehouse: (v: boolean) => void;
}

export interface WareSelection {
  idWareLabel?: string;
  target: HTMLInputElement;
}

export const useFilterBy = ({
  openSelectWarehouse,
  setOpenSelectWarehouse,
}: PropsFilterBy) => {
  const [selectedWarehouses, setSelectedWarehouses] = useState<string[]>([]);
  const [isCheckSamePrice, setIsCheckSamePrice] = useState(false);
  const stylesOpenModal = openSelectWarehouse ? "fadeIn" : "fadeOutRight";

  const onCheckAll = ({ target }: WareSelection) => {
    const isChecked = target.checked;

    if (isChecked) {
      setSelectedWarehouses(
        listWarehouse.map(({ idWareLabel }) => idWareLabel)
      );
    } else {
      setSelectedWarehouses([]);
    }
  };

  const onWarehouseSelection = ({ target, idWareLabel }: WareSelection) => {
    const isChecked = target.checked;

    if (isChecked) {
      setSelectedWarehouses((prevSelected) => [...prevSelected, idWareLabel!]);
    } else {
      setSelectedWarehouses((prevSelected) =>
        prevSelected.filter((label) => label !== idWareLabel)
      );
    }
  };

  const onIsCheckSamePrice = ({ target }: WareSelection) => {
    const isChecked = target.checked;

    if (isChecked) {
      setSelectedWarehouses([]);
      setIsCheckSamePrice(true);
    } else {
      setIsCheckSamePrice(false);
    }
  };

  const onCloseFilterBy = (e: FormEvent) => {
    e.preventDefault();
    setOpenSelectWarehouse(false);
  };

  return {
    isCheckSamePrice,
    onCheckAll,
    onCloseFilterBy,
    onIsCheckSamePrice,
    onWarehouseSelection,
    selectedWarehouses,
    stylesOpenModal,
  };
};
