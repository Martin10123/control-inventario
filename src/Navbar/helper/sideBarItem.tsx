import { BiPurchaseTagAlt } from "react-icons/bi";
import { BsCardList, BsMenuDown, BsGraphUpArrow } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { LiaChartPieSolid, LiaTruckMovingSolid } from "react-icons/lia";
import { LuSettings, LuTags, LuWarehouse } from "react-icons/lu";
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
    linkGoTo: "/",
    titleItem: "Usuarios",
  },
  {
    Icon: <BsCardList />,
    isSubMenu: true,
    linkGoTo: "/",
    titleItem: "Tienda",
    subMenus: [
      {
        Icon: <LuSettings />,
        isSubMenu: true,
        linkGoTo: "/",
        titleItem: "Configuración",
        subMenus: [
          {
            Icon: <LuWarehouse />,
            isSubMenu: false,
            linkGoTo: "/",
            titleItem: "Bodega",
          },
          {
            Icon: <TbCategory />,
            isSubMenu: false,
            linkGoTo: "/",
            titleItem: "Categorias",
          },
        ],
      },
      {
        Icon: <MdOutlineBookmarks />,
        isSubMenu: true,
        linkGoTo: "/",
        titleItem: "Producto",
        subMenus: [
          {
            Icon: <TbDeviceIpadMinus />,
            isSubMenu: false,
            linkGoTo: "/",
            titleItem: "Administrar",
          },
          {
            Icon: <LiaTruckMovingSolid />,
            isSubMenu: false,
            linkGoTo: "/",
            titleItem: "Movimientos",
          },
          {
            Icon: <MdOutlineInventory />,
            isSubMenu: false,
            linkGoTo: "/",
            titleItem: "Inventario",
          },
        ],
      },
      {
        Icon: <BiPurchaseTagAlt />,
        isSubMenu: false,
        linkGoTo: "/",
        titleItem: "Compras",
      },
      {
        Icon: <MdProductionQuantityLimits />,
        isSubMenu: false,
        linkGoTo: "/",
        titleItem: "Ventas",
      },
    ],
  },
  {
    Icon: <BsMenuDown />,
    isSubMenu: false,
    linkGoTo: "/",
    titleItem: "Perfiles",
  },
  {
    Icon: <CgFileDocument />,
    isSubMenu: true,
    linkGoTo: "",
    titleItem: "Informes",
    subMenus: [
      {
        Icon: <LiaChartPieSolid />,
        isSubMenu: false,
        linkGoTo: "/",
        titleItem: "Balance general",
      },
      {
        Icon: <TbPresentationAnalytics />,
        isSubMenu: false,
        linkGoTo: "/",
        titleItem: "Comprobantes de ingresos",
      },
      {
        Icon: <TbDeviceAnalytics />,
        isSubMenu: false,
        linkGoTo: "/",
        titleItem: "Reporte de devoluciones",
      },
      {
        isSubMenu: false,
        Icon: <BsGraphUpArrow />,
        linkGoTo: "/",
        titleItem: "Reporte de ventas",
      },
    ],
  },
  {
    Icon: <LuTags />,
    isSubMenu: false,
    linkGoTo: "/",
    titleItem: "Existencias por bodega",
  },
];
