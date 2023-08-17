import { sales, clients, proof, returns } from "../../assets";
import { CardsInfo } from "../interfaces/interfaces";

export const mainDataCard: CardsInfo[] = [
  {
    backgroundBtn: "#5b54b1",
    backgroundCard: "#f4f4fe",
    descripcionCard:
      "En esta sección, podrás registrar y manejar todos los ingresos producidos por tu negocio o empresa.",
    imageCard: proof,
    linkGoToCard: "/reports/balanceSheet",
    nameCard: "Comprobantes de ingresos",
  },
  {
    backgroundBtn: "#c390ba",
    backgroundCard: "#c27ee37a",
    descripcionCard:
      "Aquí podrás llevar un registro detallado y gestionar todas las ventas de los productos disponibles en tu negocio.",
    imageCard: sales,
    linkGoToCard: "/reports/proofIncome",
    nameCard: "Registro de ventas",
  },
  {
    backgroundBtn: "#c390ba",
    backgroundCard: "#f4f4fe",
    descripcionCard:
      "En esta sección, podrás gestionar las devoluciones de productos que tus clientes puedan realizar.",
    imageCard: returns,
    linkGoToCard: "/reports/returnsReport",
    nameCard: "Devoluciones",
  },
  {
    backgroundBtn: "#ffc9ec",
    backgroundCard: "radial-gradient(circle at top left, #ffc9ec, #cdbfdb)",
    descripcionCard:
      "Esta sección te permitirá administrar y mantener una base de datos de tus clientes.",
    imageCard: clients,
    linkGoToCard: "/reports/salesReport",
    nameCard: "Clientes",
  },
];
