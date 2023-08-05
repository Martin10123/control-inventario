import { BiPurchaseTagAlt } from "react-icons/bi";
import { BsCardList, BsMenuDown, BsGraphUpArrow } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { LiaChartPieSolid, LiaTruckMovingSolid } from "react-icons/lia";
import { LuSettings, LuWarehouse } from "react-icons/lu";
import {
  MdOutlineBookmarks,
  MdOutlineInventory,
  MdProductionQuantityLimits,
} from "react-icons/md";
import {
  TbPresentationAnalytics,
  TbDeviceAnalytics,
  TbUsersGroup,
  TbCategory,
  TbDeviceIpadMinus,
} from "react-icons/tb";
import { ListData } from "../interfaces/interfaces";

export const sideBarItem: ListData[] = [
  {
    Icon: <IoHomeOutline />,
    isSubMenu: false,
    linkGoTo: "/",
    titleItem: "Inicio",
  },
  {
    Icon: <TbUsersGroup />,
    isSubMenu: false,
    linkGoTo: "/users",
    titleItem: "Usuarios",
  },
  {
    Icon: <BsCardList />,
    isSubMenu: true,
    titleItem: "Tienda",
    subMenus: [
      {
        Icon: <LuSettings />,
        isSubMenu: true,
        titleItem: "Configuración",
        subMenus: [
          {
            Icon: <LuWarehouse />,
            isSubMenu: false,
            linkGoTo: "/warehouse",
            titleItem: "Bodega",
          },
          {
            Icon: <TbCategory />,
            isSubMenu: false,
            linkGoTo: "/categories",
            titleItem: "Categorias",
          },
        ],
      },
      {
        Icon: <MdOutlineBookmarks />,
        isSubMenu: true,
        titleItem: "Producto",
        subMenus: [
          {
            Icon: <TbDeviceIpadMinus />,
            isSubMenu: false,
            linkGoTo: "/products",
            titleItem: "Administrar",
          },
          {
            Icon: <LiaTruckMovingSolid />,
            isSubMenu: false,
            titleItem: "Movimientos",
          },
          {
            Icon: <MdOutlineInventory />,
            isSubMenu: false,
            titleItem: "Inventario",
          },
        ],
      },
      {
        Icon: <BiPurchaseTagAlt />,
        isSubMenu: false,
        titleItem: "Compras",
      },
      {
        Icon: <MdProductionQuantityLimits />,
        isSubMenu: false,
        titleItem: "Ventas",
      },
      {
        Icon: <CgFileDocument />,
        isSubMenu: true,
        titleItem: "Informes",
        subMenus: [
          {
            Icon: <LiaChartPieSolid />,
            isSubMenu: false,
            linkGoTo: "/reports/balanceSheet",
            titleItem: "Balance general",
          },
          {
            Icon: <TbPresentationAnalytics />,
            isSubMenu: false,
            linkGoTo: "/reports/proofIncome",
            titleItem: "Comprobantes de ingresos",
          },
          {
            Icon: <TbDeviceAnalytics />,
            isSubMenu: false,
            linkGoTo: "/reports/returnsReport",
            titleItem: "Reporte de devoluciones",
          },
          {
            isSubMenu: false,
            Icon: <BsGraphUpArrow />,
            linkGoTo: "/reports/salesReport",
            titleItem: "Reporte de ventas",
          },
        ],
      },
    ],
  },
  {
    Icon: <BsMenuDown />,
    isSubMenu: false,
    linkGoTo: "/profiles",
    titleItem: "Perfiles",
  },
];
