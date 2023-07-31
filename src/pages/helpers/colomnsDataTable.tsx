export {
  balanceSheet,
  categories,
  clientsList,
  products,
  profiles,
  proofOfIncome,
  returnsReport,
  salesReport,
  stocsWarehouse,
  supplier,
  users,
} from "../../JSON";

// balanceSheet
export const columnsBalanceSheet = [
  {
    accessorKey: "branch_nit",
    header: "Nit sede",
  },
  {
    accessorKey: "branch_description",
    header: "Descripción sede",
  },
  {
    accessorKey: "initial_inventory",
    header: "Inventario inicial",
  },
  {
    accessorKey: "inventory_value",
    header: "Valor inventario",
  },
  {
    accessorKey: "current_quantity",
    header: "Cantidad actual",
  },
  {
    accessorKey: "current_value",
    header: "Valor actual",
  },
  {
    accessorKey: "quantity_sold",
    header: "Cantidad vendida",
  },
  {
    accessorKey: "value_sold",
    header: "Valor vendido",
  },
];

// categories

export const columnsCategories = [
  {
    accessorKey: "codigo",
    header: "Codigo",
  },
  {
    accessorKey: "nameProduct",
    header: "Nombre del producto",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
];

// clientsList

export const columnsClientsList = [
  {
    accessorKey: "identification",
    header: "Identificación",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "address",
    header: "Dirección",
  },
  {
    accessorKey: "cellphone",
    header: "Telefono",
  },
];

// products

export const columnsProducts = [
  {
    accessorKey: "code",
    header: "Codigo",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    accessorKey: "cost",
    header: "Costo",
  },
  {
    accessorKey: "suggested",
    header: "Sugerencias",
  },
  {
    accessorKey: "stock",
    header: "Existencias",
  },
];

// profiles

export const columnsProfiles = [
  {
    accessorKey: "code",
    header: "Codigo",
  },
  {
    accessorKey: "subject",
    header: "Nombre",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
];

// proofOfIncome

export const columnsProofOfIncome = [
  {
    accessorKey: "order_number",
    header: "N° Orden",
  },
  {
    accessorKey: "branch_description",
    header: "Descripción",
  },
  {
    accessorKey: "point_of_sale",
    header: "Punto de venta",
  },
  {
    accessorKey: "quantity",
    header: "Cantidad",
  },
  {
    accessorKey: "total_value",
    header: "Valor total",
  },
  {
    accessorKey: "date",
    header: "Fecha",
  },
];

// returnsReport

export const columnsReturnsReport = [
  {
    accessorKey: "order_number",
    header: "N° Orden",
  },
  {
    accessorKey: "source_point_of_sale",
    header: "Punto de venta (Salida)",
  },
  {
    accessorKey: "destination_point_of_sale",
    header: "Punto de venta (Destino)",
  },
  {
    accessorKey: "quantity",
    header: "Cantidad",
  },
  {
    accessorKey: "total_value",
    header: "Valor total",
  },
  {
    accessorKey: "date",
    header: "Fecha",
  },
];

// salesReport

export const columnsSalesReport = [
  {
    accessorKey: "order_number",
    header: "N° Orden",
  },
  {
    accessorKey: "point_of_sale",
    header: "Punto de venta",
  },
  {
    accessorKey: "salesman",
    header: "Vendedor",
  },
  {
    accessorKey: "quantity",
    header: "Cantidad",
  },
  {
    accessorKey: "total_value",
    header: "Valor total",
  },
  {
    accessorKey: "date",
    header: "Fecha",
  },
];

// stocsWarehouse

export const columnsStocsWarehouse = [
  {
    accessorKey: "product_code",
    header: "Codigo del producto",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "cost",
    header: "Costo",
  },
  {
    accessorKey: "stock",
    header: "Existencias",
  },
];

// supplier

export const columnsSupplier = [
  {
    accessorKey: "codigo",
    header: "Codigo",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "nameContact",
    header: "Nombre de contacto",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "cellphone",
    header: "Telefono",
  },
];

// users

export const columnsUsers = [
  {
    accessorKey: "codigo",
    header: "Codigo",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "lastName",
    header: "Apellido",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "cellphone",
    header: "Telefono",
  },
];
