export interface PropsProductMovement {
  onOpenAddNewMovement: () => void;
  openCreateMovement: boolean;
}

export interface ProductListState {
  idProduct: string;
  nameProduct: string;
}

export const optionsSelect = [
  { value: "Opción 1", label: "Opción 1" },
  { value: "Opción 2", label: "Opción 2" },
  { value: "Opción 3", label: "Opción 3" },
  { value: "Opción 4", label: "Opción 4" },
  { value: "Opción 5", label: "Opción 5" },
  { value: "Opción 6", label: "Opción 6" },
  { value: "Opción 7", label: "Opción 7" },
  { value: "Opción 8", label: "Opción 8" },
  { value: "Opción 9", label: "Opción 9" },
  { value: "Opción 10", label: "Opción 10" },
];
